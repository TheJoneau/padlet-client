import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Padlet} from "../types/Padlet";
@Injectable({
  providedIn: 'root'
})
export class PadletStoreService {

  private api = 'http://padlet.s2010456015.student.kwmhgb.at/api';


  constructor(private http: HttpClient) { }

  getAll() : Observable<Array<Padlet>> {
    return this.http.get<Array<Padlet>>(`${this.api}/padlets`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

 /* getSingle (isbn: string) : Observable<Book> {
    return this.http.get<Book>(`${this.api}/books/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  getAllSearch (searchTerm: string) : Observable<Array<Book>> {
    return this.http.get<Book>(`${this.api}/books/search/${searchTerm}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  create (book: Book): Observable<any> {
    return this.http.post(`${this.api}/books`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  update (book: Book): Observable<any> {
    return this.http.put(`${this.api}/books/${book.isbn}`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  remove (isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/books/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }*/

  private errorHandler (error: Error | any) : Observable<any> {
    return throwError(error);
  }

}
