import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {TokenService} from "../../services/auth/token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private tokenService: TokenService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const canActive: boolean = Boolean(this.tokenService.getToken());
    console.log('validando token');
    sessionStorage.setItem('redirectTo', state.url);
    if (!canActive) {
      console.log('se debe redireccionar al login');
      this.router.navigateByUrl('login');
    }
    return canActive;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }

}
