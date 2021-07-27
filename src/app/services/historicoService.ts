import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
import { httpService } from '../services/httpService';
  
  

@Injectable()
export class historicoService extends httpService {

    constructor(
    private http: HttpClient
    ){ 
        super();
    };

    listarHistorico(): Observable<Operacao[]>{
        return this.http.get<Operacao[]>(`${environment.baseUrl}historico`,this.httpOptions);
    }

    listarHistoricoAcao(acao): Observable<Operacao[]>{
        return this.http.post<Operacao[]>(`${environment.baseUrl}historico/acao`, {tag:acao} , this.httpOptions);
    }
}