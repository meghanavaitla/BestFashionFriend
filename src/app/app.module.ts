import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
    WaccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
