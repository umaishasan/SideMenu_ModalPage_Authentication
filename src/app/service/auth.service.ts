import { Injectable } from '@angular/core';
import { UserPage } from '../user/user.page';

export interface User{
  name:string;
  role:number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor() { }

  login(name:string,pass:string):Promise<boolean>{
    return new Promise((resolve,reject) => {
      if(name === 'admin' && pass === 'admin'){
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve(true);
      }
      else if(name === 'user' && pass === 'user'){
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      }
      else{
        resolve(false);
      }
    });
  }

  isLoggedIn(){
    return  this.currentUser != null;
  }

  logout(){
    this.currentUser = null;
  }

  isAdmin(){
    return this.currentUser.role === 0;
  }
  
}
