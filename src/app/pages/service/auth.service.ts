import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkLoginStatus() {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    // Simulating successful login by storing a random token
    localStorage.setItem("token", Math.random().toString());
    return of(true); // Simulating an API response
  }
  get isLoggedIn() {
    if(localStorage.getItem("token")) {
      return true;
    }
    return false;
}
}
