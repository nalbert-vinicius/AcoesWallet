import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
  
const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );
  

@Injectable()
export class historicoService {

    constructor(
    private http: HttpClient
    ){ };

    listarHistorico(): Observable<Operacao[]>{
        return this.http.get<Operacao[]>(`${environment.baseUrl}historico`, { headers });
    }

    listarHistoricoAcao(acao): Observable<Operacao[]>{
        return this.http.post<Operacao[]>(`${environment.baseUrl}historico/acao`, {tag:acao} , { headers });
    }
}