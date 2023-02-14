import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Member } from '../entities/Member';

export class MemberPagination {
  page = 0;
  linesPerPage = 4;
  direction?: string = "ASC";
  orderBy?: string = "name";
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  list(pagination: MemberPagination, filterName: string): Observable<any> {

    let params = new HttpParams()
    .set('name', filterName)
    .set('page', pagination.page)
    .set('linesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http
      .get<any>(AppConstants.backendServer + 'members', { params });
  }

  insert(member: Member) : Observable<any> {
    return this.http.post<any>(AppConstants.backendServer + 'members', member);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(AppConstants.backendServer + 'members/' + id);
  }
  
  update(member: Member) : Observable<any> {
    return this.http.put<any>(AppConstants.backendServer + 'members/' + member.id, member);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.backendServer + 'members/' + id);
  }

}


