import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Trainer } from 'src/app/core/models/Trainer';
import { Pagination } from 'src/app/core/models/Pagination';
import { environment } from 'src/environments/environment';


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

    return this.http.get<any>(environment.baseUrl + '/trainers', { params });
  }

  insert(trainer: Trainer) : Observable<any> {
    console.log(trainer);
    return this.http.post<any>(environment.baseUrl + '/trainers', trainer);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + '/trainers/' + id);
  }
  
  update(trainer: Trainer) : Observable<any> {
    return this.http.put<any>(environment.baseUrl + '/trainers/' + trainer.id, trainer);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(environment.baseUrl + '/trainers/' + id);
  }
}
