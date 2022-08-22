import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router, private _snackBar: MatSnackBar) { }

    signUp(email: string, password: string) {
      this.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/user']);
          this.openSnackBar('SignUp successfully');
        })
        .catch((error) => {
          console.log('error code: ', error.code,' errorMessage: ', error.message);
          this.openSnackBar(error.message);
        })
        ;
    }

    logIn(email: string, password: string) {
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/user']);
          this.openSnackBar('Login successfully.');
        })
        .catch((error) => {
          console.log('error code: ', error.code, ' errorMessage: ', error.message);
          this.openSnackBar(error.message);
        })
    }

    logOut() {
      this.auth.signOut().then(() => {
        this.router.navigate(['/login']);
        this.openSnackBar('Logout sucessfully');
      });
    }

    openSnackBar(message: string) {
      this._snackBar.open(message, '', {
        duration: 3000
      });
    }
}
