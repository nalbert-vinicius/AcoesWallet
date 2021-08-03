import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
import { httpService } from '../services/httpService';

@Injectable()
export class operacaoService extends httpService {

    constructor(private http: HttpClient) {
        super();
    }

    listarOperacao(): Observable<Operacao[]>{
        return this.http.get<Operacao[]>(`${environment.baseUrl}operacoes`, this.httpOptions);
    }

    deletarOperacao(id: any){
        return this.http.delete(`${environment.baseUrl}operacoes/deletar/`+id, this.httpOptions).toPromise();    
    }

    criarOperacao(operacao: Operacao): Observable<Operacao>{
        return this.http.post<Operacao>(`${environment.baseUrl}operacoes/cadastrar`, operacao, this.httpOptions);    
    }

    editarOperacao(id: string, operacao: Operacao): Observable<Operacao>{
        return this.http.patch<Operacao>(`${environment.baseUrl}operacoes/atualizar/`+id, operacao, this.httpOptions);    
    }

}