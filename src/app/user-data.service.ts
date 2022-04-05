import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getUserData(){
    return{
      name:"sameer",
      email:"sameer@gmail.com",
      mobile:'3152646017'
    }
  }
}
