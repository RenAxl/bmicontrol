import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { Pagination } from 'src/app/core/models/Pagination';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  list(pagination: Pagination, filterName: string): Observable<any> {

    let params = new HttpParams()
    .set('name', filterName)
    .set('page', pagination.page)
    .set('linesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http
      .get<any>(environment.baseUrl + '/users', { params });
  }

  insert(user: User) : Observable<any> {
   console.log(user);
    return this.http.post<any>(environment.baseUrl + '/users', user);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + '/users/' + id);
  }
  
  update(user: User) : Observable<any> {
    console.log(user);
    return this.http.put<any>(environment.baseUrl + '/users/' + user.id, user);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(environment.baseUrl + '/users/' + id);
  }

}
