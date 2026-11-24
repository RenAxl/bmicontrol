const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, 'dist/frontend');
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject'
};
http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }); return res.end();
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end(); }
  if (pathname.includes('\0')) { res.writeHead(400); return res.end(); }
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) {
    res.writeHead(403); return res.end();
  }
  fs.stat(file, (err, stat) => {
    const target = !err && stat.isFile() ? file : path.join(root, 'index.html');
    if ((err || !stat.isFile()) && path.extname(pathname)) {
      res.writeHead(404); return res.end();
    }
    fs.readFile(target, (readError, data) => {
      if (readError) { res.writeHead(500); return res.end(); }
      res.writeHead(200, {
        'Content-Type': types[path.extname(target)] || 'application/octet-stream',
        'Cache-Control': target.endsWith('index.html') ? 'no-cache' : 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(req.method === 'HEAD' ? undefined : data);
    });
  });
}).listen(process.env.PORT || 8080, '0.0.0.0');
