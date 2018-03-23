import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.httpClient
      .post<User>("http://localhost:3000/user", user)
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  login(user: User): Observable<User> {
    return this.httpClient
      .post<User>("http://localhost:3000/user/login", user)
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }
}