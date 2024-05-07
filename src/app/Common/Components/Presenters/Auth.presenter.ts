import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IAuth} from "../../Interfaces/auth.interface";

@Injectable()
export class AuthPresenter {
    user = new FormControl();
    password = new FormControl();

    form: FormGroup = new FormGroup({
        user : this.user,
        password : this.password,
    })
    constructor() {
        this.setValidation();
    }
    setValidation(){
        this.user.setValidators([
            Validators.required
        ]);
        this.password.setValidators([
            Validators.required
        ]);
    }

    setValue(form: IAuth){
        this.user.setValue(form.userName);
        this.password.setValue(form.password);
    }
}
