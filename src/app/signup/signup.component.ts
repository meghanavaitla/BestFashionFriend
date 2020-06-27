import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
    constructor(public authservice:AuthService,
      private flashMessage: FlashMessagesService,
      private router:Router) { }

  ngOnInit(): void {
  }
  registerData:any ={}
  post(){
    console.log(this.registerData);
    this.authservice.sendRegistrationData(this.registerData);
    this.router.navigate(['']);
    
  }
}
