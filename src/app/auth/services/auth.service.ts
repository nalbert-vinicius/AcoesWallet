import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse, TokenResponse } from '../interfaces/interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

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
          localStorage.setItem('token', result.token!);
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

  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }usuarios/validate`;
    const headers = new HttpHeaders()
      .set('authorization', 'Bearer '+localStorage.getItem('token') || '' );

    return this.http.post<TokenResponse>( url, null, { headers } )
        .pipe(
          map( resp => {
            console.log(resp)
            this._usuario = {
              msg: resp.msg,
              nome: resp.nome,
              Ok: resp.Ok,
            }
            return resp.Ok;
          }),
          catchError( err => of(false) )
        );
  }

  async logout(){
    await localStorage.clear();
  }

}
