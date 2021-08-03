import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { httpService } from '../services/httpService';

@Injectable()
export class usuariosService extends httpService {

    constructor(
    private http: HttpClient
    ){  super(); };

    cadastrarUsuarios(data){
        return this.http.post(`${environment.baseUrl}usuarios/cadastrar`, data).toPromise().then((data: any) => data);
    }

    removerUsuario(id){
        return this.http.post(`${environment.baseUrl}usuarios/apagar`, id).toPromise().then((data: any) => data);
    }

    getUser(){
        return this.http.get(`${environment.baseUrl}usuarios/getUser`, this.httpOptions).toPromise().then((data: any) => data);
    }

    updateUsuario(data){
        return this.http.patch(`${environment.baseUrl}usuarios/atualizar`, data, this.httpOptions).toPromise().then((data: any) => data);
    }
}