import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(authInfo: any) {
    if (authInfo.login === 'admin' && authInfo.password === 'admin12345') {
      this.setToken('dfgdfgdfgdfg');
      this.isAuth = true;
    }
  }

  logout() {
    this.router.navigate(['login'])
  }

}
