import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  ngOnInit(): void {
  }
  loginData:any = { }
  constructor(public authservice:AuthService,private flashMessage: FlashMessagesService,private router:Router) {} 
  post(){
    
    this.authservice.loginuserData(this.loginData);
    this.router.navigate(['']);
  }
  

}
