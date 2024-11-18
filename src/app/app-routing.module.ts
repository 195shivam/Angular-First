import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"user/:id",
    component:UserComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
