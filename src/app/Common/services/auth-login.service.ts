import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {IAuth} from "../Interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private path : string = `${environment.API.url}`;
  constructor(private http: HttpClient) { }

  signIn(data:IAuth){
    return this.http.post(this.path+`${environment.API.path.singin}`,data).pipe(
      map(data => {return data})
    )
  }
}
