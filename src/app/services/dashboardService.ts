import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GraficoPizza } from 'src/app/auth/interfaces/interfaces';
import { Observable } from 'rxjs';
  

const headers = new HttpHeaders()
.set('authorization', 'Bearer '+localStorage.getItem('token') || '' );

@Injectable()
export class dashBoardService {

    constructor(
    private http: HttpClient
    ){ };

    listarAcao(): Observable<GraficoPizza[]>{
        
        return this.http.get<GraficoPizza[]>(`${environment.baseUrl}dashboard`, { headers });
    }
}