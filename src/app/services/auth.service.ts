import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false;

  get userIsAuthenticated(){
    return of(this._userIsAuthenticated)
  }

  constructor() { }

  login(){
    this._userIsAuthenticated = true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }
}
