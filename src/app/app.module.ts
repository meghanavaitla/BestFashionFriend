import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BlousesComponent } from './blouses/blouses.component';
import { EthnicComponent } from './ethnic/ethnic.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { WaccessoriesComponent } from './waccessories/waccessories.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { JacketsComponent } from './jackets/jackets.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { MenaccessoriesComponent } from './menaccessories/menaccessories.component';
import { ShortsComponent } from './shorts/shorts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthinterceptorService} from './authinterceptor.service';
import {AuthService}from './auth.service';
import {ApiService} from './api.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutusComponent,
    WomenComponent,
    MenComponent,
    FooterComponent,
    BlousesComponent,
    EthnicComponent,
    BottomsComponent,
    TraditionalComponent,
    WaccessoriesComponent,
    BottomwearComponent,
    JacketsComponent,
    TshirtComponent,
    MenaccessoriesComponent,
    ShortsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [ApiService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorService,
    multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
