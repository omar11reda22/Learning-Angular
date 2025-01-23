import { Injectable } from '@angular/core';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  user: user[] = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user1', password: 'password1' },
    { id: 3, username: 'user2', password: 'password2' },
    { id: 4, username: 'user3', password: 'password3' },
  ];
  isLogged = false;
  login(username: string, password: string): boolean {
    // Find user by username and password
    const foundUser = this.user.some(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      this.isLogged = true;
      return true; // Successful login
    } else {
      this.isLogged = false;
      return false; // Login failed
    }
  }
  logOut() {
    this.isLogged = false;
  }
  register(newuser: user) {
    this.user.push(newuser);
    this.isLogged = true; 
  }
  constructor() {}
}
