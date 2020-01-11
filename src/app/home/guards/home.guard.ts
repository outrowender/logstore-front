import {
  CanLoad,
  CanActivate,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  UrlSegment
} from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeGuard implements CanLoad, CanActivate {
  constructor(private _auth: AuthService) {}

  canActivate = (r: ActivatedRouteSnapshot, s: RouterStateSnapshot) =>
    this._auth.tokenIsValid();

  canLoad = (r: Route, s: UrlSegment[]) => this._auth.tokenIsValid();
}
