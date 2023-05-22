import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Entry} from "../types/Entry";

@Injectable({
  providedIn: 'root'
})

export class EntryStoreService {

  private api = 'http://padlet.s2010456015.student.kwmhgb.at/api';


  constructor(private http: HttpClient) { }

  create (entry: Entry): Observable<any> {
    return this.http.post(`${this.api}/entries`, entry)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove (id: number): Observable<any> {
    return this.http.delete(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler (error: Error | any) : Observable<any> {
    return throwError(error);
  }

}
