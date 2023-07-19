import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { Store } from '@ngrx/store';
import { AuthState } from '../inicio-sesion/state/auth.reducer';
import { selectorSesionState } from '../inicio-sesion/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild {

constructor(
  private authStore: Store <AuthState>,
  private router: Router
){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectorSesionState).pipe(
        map((sesion:Sesion)=>{
          if(sesion.sesionActiva){
            return true
          }
          else if(sesion.usuarioActivo?.admin){
            return true
          }
          else {
            this.router.navigate(['inicio-sesion'])
            return false}
        })
      ) ;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectorSesionState).pipe(
      map((sesion:Sesion)=>{
        if(sesion.sesionActiva){
          return true
        } else {
          this.router.navigate(['inicio-sesion'])
          return false}
      })
    ) ;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectorSesionState).pipe(
        map((sesion:Sesion)=>{
          if(sesion.sesionActiva){
            return true
          } else {
            this.router.navigate(['inicio-sesion'])
            return false}
        })
      ) ;
  }
}
