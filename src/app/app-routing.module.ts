import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BlousesComponent } from './blouses/blouses.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { WaccessoriesComponent } from './waccessories/waccessories.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'women',component:WomenComponent},
  {path:'men',component:MenComponent},
  {path:'blouses',component:BlousesComponent},
  {path:'bottoms',component:BottomsComponent},
  {path:'traditionalwear',component:TraditionalComponent},
  {path:'womenaccessories',component:WaccessoriesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
