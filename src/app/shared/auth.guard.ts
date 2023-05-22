import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationStoreService } from './authentication-store-service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateProtected implements CanActivate {

  constructor (
    private authService: AuthenticationStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      window.alert("Please Login");
    }
    this.router.navigate(["/"]);
    return false;
  }

}
