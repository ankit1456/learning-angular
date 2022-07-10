import { BadInput } from './../bad-input';
import { NotFoundError } from '../not-found.error';
import { AppError } from '../app.error';
import { HttpClient } from '@angular/common/http';
import {  Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(@Inject('url') private url: string, private http: HttpClient) {}
  getALl() {
    return this.http.get(this.url).pipe(map((response) => response)).pipe(catchError(this.handleError))
  }
  create(resource: any) {
    return this.http
      .post(this.url, {
        title: resource.value,
      })
      .pipe(catchError(this.handleError));
  }
  update(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, { ...resource, approve: true })
      .pipe(catchError(this.handleError));
  }
  delete(id: any) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status == 400) return throwError(() => new BadInput());

    if (error.status == 404) return throwError(() => new NotFoundError());
    return throwError(() => new AppError(error));
  }
}
