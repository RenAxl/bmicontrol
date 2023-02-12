import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

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
    .set('LinesPerPage', pagination.linesPerPage)
    .set('direction', String(pagination.direction))
    .set('orderBy', String(pagination.orderBy));

    return this.http
      .get<any>(AppConstants.backendServer + 'members', { params });
  }
}
