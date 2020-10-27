import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    component:HomeComponent , path:''
  },
  {
    component:AddRestaurantComponent , path:'add'
  },
  {
    component:UpdateRestaurantComponent, path:'update/:id'
  },
  {
    component:ListRestaurantComponent, path:'list'},
  {
    component:LoginComponent, path:'login'},
  {
    component:RegisterComponent, path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
