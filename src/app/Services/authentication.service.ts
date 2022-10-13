import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private _registerUrl = "http://localhost:5098/Auth/Register"
  private _loginUrl = "http://localhost:5098/Auth/Login"
  constructor(private http: HttpClient,
              private _router: Router) {    
   }
   
   registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user)
   }

   loginUser(user:any){
    return this.http.post<any>(this._loginUrl,user)
   }

   loggedIn(){
    return !!localStorage.getItem('token')
   }

   logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
   }

   getToken(){
    return localStorage.getItem('token')
   }
}
