import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GraficoPizza } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
import { httpService } from '../services/httpService';
  

const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );

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
}