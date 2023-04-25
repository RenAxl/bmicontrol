import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Trainer } from 'src/app/core/models/Trainer';
import { Pagination } from 'src/app/core/models/Pagination';


@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor(private http: HttpClient) {}
  
  list(pagination: Pagination, filterName: string): Observable<any> {

    let params = new HttpParams()
      .set('name', filterName)
      .set('page', pagination.page)
      .set('linesPerPage', String(pagination.linesPerPage))
      .set('direction', String(pagination.direction))
      .set('orderBy', String(pagination.orderBy));

    return this.http.get<any>(AppConstants.backendServer + 'trainers', { params });
  }

  insert(trainer: Trainer) : Observable<any> {
    console.log(trainer);
    return this.http.post<any>(AppConstants.backendServer + 'trainers', trainer);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(AppConstants.backendServer + 'trainers/' + id);
  }
  
  update(trainer: Trainer) : Observable<any> {
    return this.http.put<any>(AppConstants.backendServer + 'trainers/' + trainer.id, trainer);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.backendServer + 'trainers/' + id);
  }
}
