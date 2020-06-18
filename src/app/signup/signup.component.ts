import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

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
  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
  }
  registerData:any ={}
  post(){
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }
    console.log(this.registerData);
    this.authservice.sendRegistrationData(this.registerData);
    
    
  }
}
