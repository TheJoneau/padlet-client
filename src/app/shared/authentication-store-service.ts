import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

interface Token {
  exp: number;
  user: {
    id: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationStoreService {


  private api = 'http://padlet.s2010456015.student.kwmhgb.at/api/auth';

  constructor (private http: HttpClient) { }


  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }

  public setSessionStorage (token: string) {
    console.log("saving token");
    console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id)
  }

  public logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    console.log("logged out");
  }

  public isLoggedIn() : boolean {
    if (sessionStorage.getItem("token")) {
      let token: string = <string>sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        return false;
      }
      return true;
    }
    else {
      return false;
    }
  }

  public isLoggedOut() : boolean {
    return !this.isLoggedIn();
  }
}
