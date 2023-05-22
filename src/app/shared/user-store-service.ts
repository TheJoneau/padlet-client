import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Padlet} from "../types/Padlet";
import {User} from "../types/User";

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {

  private api = 'http://padlet.s2010456015.student.kwmhgb.at/api';


  constructor(private http: HttpClient) { }

  getAll() : Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.api}/users`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler (error: Error | any) : Observable<any> {
    return throwError(error);
  }

}
