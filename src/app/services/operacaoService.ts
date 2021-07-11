import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
  
const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );
  

@Injectable()
export class operacaoService {

    constructor(
    private http: HttpClient
    ){ };

    listarOperacao(): Observable<Operacao[]>{
        return this.http.get<Operacao[]>(`${environment.baseUrl}operacoes`, { headers });
    }

    deletarOperacao(id: any){
        return this.http.delete(`${environment.baseUrl}operacoes/deletar/`+id, { headers }).toPromise();    
    }

    criarOperacao(operacao: Operacao): Observable<Operacao>{
        return this.http.post<Operacao>(`${environment.baseUrl}operacoes/cadastrar`, operacao, { headers });    
    }

    editarOperacao(id: string, operacao: Operacao): Observable<Operacao>{
        return this.http.patch<Operacao>(`${environment.baseUrl}operacoes/atualizar/`+id, operacao, { headers });    
    }

}