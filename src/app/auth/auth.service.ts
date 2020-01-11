import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {
    this.stateWatch();
  }

  authState = new BehaviorSubject<string>("valid");

  stateWatch() {
    this.authState.subscribe(x => {
      if (x == "invalid") {
        this._router.navigate(["login"]);
      } else {
        this._router.navigate(["home"]);
      }
    });
  }

  setAuthState(state: "valid" | "invalid") {
    if (this.authState.getValue() == "valid" && state == "valid") return;

    this.authState.next(state);
  }

  getToken = () => localStorage.getItem("user");

  clearToken = () => localStorage.removeItem("user");

  setToken(token: string) {
    localStorage.setItem("user", token);
    this.tokenIsValid();
  }

  /// retorna true se o token for válido
  tokenIsValid() {
    const token = this.getToken();

    if (token === undefined) return false;
    const helper = new JwtHelperService();

    let isExpired = true;
    try {
      isExpired = helper.isTokenExpired(token);
    } catch (error) {
      isExpired = true;
    }

    this.setAuthState(isExpired ? "invalid" : "valid");

    return !isExpired;
  }

  register(data: any) {
    this._http
      .post<any>(`${environment.api}/user`, data)
      .toPromise()
      .then(data => {
        this.setToken(data.token);
      })
      .catch(e => console.warn(e));
  }

  login(data: any) {
    this._http
      .post<any>(`${environment.api}/auth`, data)
      .toPromise()
      .then(data => {
        this.setToken(data.token);
      })
      .catch(e => console.warn(e));
  }

  logout() {
    this.clearToken();
    this.setAuthState("invalid");
  }
}
