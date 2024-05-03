import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./work-flow/login/login.component";
import {AuthPresenter} from "./Common/Components/Presenters/Auth.presenter";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthPresenter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
