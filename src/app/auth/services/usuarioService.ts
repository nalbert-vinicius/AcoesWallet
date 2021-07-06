import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class usuariosService {

    constructor(
    private http: HttpClient
    ){ };

    cadastrarUsuarios(data){
        return this.http.post(`${environment.baseUrl}usuarios/cadastrar`, data).toPromise().then((data: any) => data);
    }

}