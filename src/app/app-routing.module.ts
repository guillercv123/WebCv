import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path:'login' , component: AppComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
