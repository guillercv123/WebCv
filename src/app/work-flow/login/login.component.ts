import { Component } from '@angular/core';
import {AuthPresenter} from "../../Common/Components/Presenters/Auth.presenter";
import {AuthLoginService} from "../../Common/services/auth-login.service";
import {IAuth} from "../../Common/Interfaces/auth.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authPresenter: AuthPresenter,
              private authLoginService: AuthLoginService) {
  }

  signIn(){
    const data = this.authPresenter.form.value;
    const request: IAuth = {
      userName: data.user,
      password: data.password,
    };
    this.authLoginService.signIn(request).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
