import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
  
const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );
  

@Injectable()
export class operacaoService {

    constructor(
    private http: HttpClient
    ){ };

    listarOperacao(){
        return this.http.get<Operacao>(`${environment.baseUrl}operacoes`, { headers }).toPromise();
    }

}