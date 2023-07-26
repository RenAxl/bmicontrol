import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Member } from '../core/models/Member';
import { Pagination } from '../core/models/Pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  list(pagination: Pagination, filterName: string): Observable<any> {

    let params = new HttpParams()
    .set('name', filterName)
    .set('page', pagination.page)
    .set('linesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http
      .get<any>(environment.baseUrl + '/members', { params });
  }

  insert(member: Member) : Observable<any> {
    return this.http.post<any>(environment.baseUrl + '/members', member);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + '/members/' + id);
  }
  
  update(member: Member) : Observable<any> {
    return this.http.put<any>(environment.baseUrl + '/members/' + member.id, member);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(environment.baseUrl + '/members/' + id);
  }

}

