import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://localhost:3000/api/signin',
    signup: 'http://localhost:3000/api/signup'
  } 

  public user: User = new User();

  constructor() { }

  handle(token)
  {
    this.setToken(token);
    this.payload(token);    
  }

  setToken(token)
  {
    sessionStorage.setItem('token', token);
  }

  getToken()
  {
    return sessionStorage.getItem('token');
  }
  
  setUser(payload){    
    this.user.displayName = payload.udn;        
    this.user.email = payload.sub;        
  }

  getUser(){
    return this.user;
  }

  removeToken()
  {
    return sessionStorage.removeItem('token');
  }

  isValidToken()
  {   
    const token = this.getToken();

    if( token )
    {
      const payload = this.payload(token);

      if (payload)
      {
        this.setUser(payload);
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

     return false;
  }

  payload(token)
  {
    const payload = token.split('.')[1];    
    return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));    
  }


  loggedIn()
  {
    return this.isValidToken();
  }
}
