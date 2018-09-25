import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'add',
  component: AddComponent,
},{
  path: 'signup',
  component: SignupComponent,
},{
  path: 'login',
  component: LoginComponent,
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
