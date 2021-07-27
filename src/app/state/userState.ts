import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TokenResponse } from "../auth/interfaces/interfaces";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserState {

    private userActive: any;
    
    get usuario() {
        return { ...this.userActive};
    }
    
    setActiveUser(user: TokenResponse) {
        localStorage.setItem('loggedInUser',
            JSON.stringify({
                nome: user.nome,
                token: user.token,
                Ok: user.Ok
            }));
        this.userActive = user;
        return this.userActive;
    }

    getToken(){
        return this.userActive.token;
    }

    logout() {
        this.userActive = '';
        localStorage.removeItem('loggedInUser');
    }


    get httpHeader() {
        const headers = new HttpHeaders()
            .set('authorization', 'Bearer '+this.userActive.token || '' );
        return headers;
    }
}