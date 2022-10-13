import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User =  {Id:0, Username:'', Password:''};
  constructor(private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  registerUser(){
    //console.log('USER', this.user)
    this._auth.registerUser(this.user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
