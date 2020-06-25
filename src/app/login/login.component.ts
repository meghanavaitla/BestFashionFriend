import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  ngOnInit(): void {
  }
  loginData:any = { }
  constructor(public authservice:AuthService,private flashMessage: FlashMessagesService) {} 
  post(){
    
    this.authservice.loginuserData(this.loginData);
    if(this.authservice.isAuthenticated)
    {
      this.flashMessage.show('you are now Logged in',{cssClass:'alert-success',timeout:5000});
    }
    else
    {
      this.flashMessage.show('Error in logging',{cssClass:'alert-danger',timeout:5000});
    }
  }
  

}
