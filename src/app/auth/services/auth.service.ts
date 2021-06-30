import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: LoginResponse;

  constructor(
    private http: HttpClient
  ) { }

  
  get usuario() {
    return { ...this._usuario};
  }

  login(email: String, senha: String){
    const url = `${this.baseUrl}usuarios/login`
    const body = {email, senha}

    return this.http.post<LoginResponse>(url, body)
    .pipe(
      tap(result =>{
        if(result.Ok){
          this._usuario = {
            msg: result.msg,
            Ok: result.Ok,
            token: result.token
          }
        }
      }),
      map(result => result.Ok),
      catchError( err => of(err.error.msg))
    );
  }

}
