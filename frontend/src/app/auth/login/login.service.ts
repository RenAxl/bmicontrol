import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { User } from 'src/app/entities/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   requestToken(user: User): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Ym1pY29udHJvbDpibWljb250cm9sMTIz');

      const body = `username=${user.email}&password=${user.password}&grant_type=password`;


    return this.http.post<any>(AppConstants.oauthTokenUrl, body, { headers});
  }
}
