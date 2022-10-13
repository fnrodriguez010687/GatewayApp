import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User =  {Id:0, Username:'', Password:''};
  constructor(private _auth: AuthenticationService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.data)
          this._router.navigate(['/dashboard'])
        },
        err => console.log(err)
      )
  }
}
