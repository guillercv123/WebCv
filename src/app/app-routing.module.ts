import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./work-flow/login/login.component";

const routes: Routes = [
  { path:'login' , component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
