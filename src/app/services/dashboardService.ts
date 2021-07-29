import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GraficoPizza } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
import { httpService } from '../services/httpService';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
  

const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );

const url = "";

@Injectable()
export class dashBoardService extends httpService {

    constructor(
    private http: HttpClient
    ){
        super();
    };

    

    listarAcao(): Observable<GraficoPizza[]>{
        return this.http.get<GraficoPizza[]>(`${environment.baseUrl}dashboard`, this.httpOptions);
    }
    listarValor(acao): Observable<any>{
        return this.http.get<any>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${acao}.SAO&apikey=V36X63W8VIURAQDD`);
    }
}