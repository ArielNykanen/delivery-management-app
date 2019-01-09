import * as firebase from 'firebase';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  token: string;
  loading = false;
  successMessage = false;
  constructor(private router: Router) {}

  signinUser(email: string, password: string) {
    this.loading = true;
    this.successMessage = false;
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(
      response => {
        this.router.navigate(['../']);
        console.log(response);
        firebase.auth().currentUser.getIdToken()
         .then(
           (token: string) => {
             this.token = token;
             localStorage.setItem('userId', token);
            }
         );
      }
    ).catch((error) => {
      this.loading = false;
      alert(error);
    }
    );
  }

  getToken() {
    if (localStorage.getItem('userId')) {
      const token = localStorage.getItem('userId');
      this.token = token;
    } else {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
        );
      }
      return this.token;
  }

  removeToken() {
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
}

logOut() {
  // todo make it async
  if (confirm('?אתה בטוח שהינך רוצה להתנתק')) {
  firebase.auth().signOut().then(function () {
      localStorage.clear();
    });
    this.token = null;
    this.loading = false;
    this.router.navigate(['sign-in']);
}
}

}
