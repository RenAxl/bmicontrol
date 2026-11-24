// Angular 14 can leave worker handles open on current Node releases. Exit only
// after the CLI has finished building and returned its actual success/failure code.
process.chdir(__dirname);
require('symbol-observable');
const cli = require('@angular/cli/lib/cli').default;
const args = process.argv.slice(2);
cli({ cliArgs: ['build', ...(args.length ? args : ['--configuration', 'production'])] })
  .then(code => process.exit(code ?? 0))
  .catch(error => { console.error(error); process.exit(1); });
