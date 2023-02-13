import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

export class TrainerPagination {
  page = 0;
  linesPerPage = 3;
  direction?: string = 'ASC';
  orderBy?: string = 'name';
}

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor(private http: HttpClient) {}

  list(pagination: TrainerPagination): Observable<any> {

    let params = new HttpParams()
      .set('page', pagination.page)
      .set('LinesPerPage', pagination.linesPerPage)
      .set('direction', String(pagination.direction))
      .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'trainers', { params });
  }
}
