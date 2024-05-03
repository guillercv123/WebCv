import { Component } from '@angular/core';
import {AuthPresenter} from "../../Common/Components/Presenters/Auth.presenter";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authPresenter: AuthPresenter,) {
  }
}
