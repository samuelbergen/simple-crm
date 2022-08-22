import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router, private _snackBar: MatSnackBar) {}

  async canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const user = await this.auth.currentUser;
      const isAuthenticated = user ? true : false;
      if (!isAuthenticated) {
        this.openSnackBar('Please login to use Simple CRM!');
        this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }
}