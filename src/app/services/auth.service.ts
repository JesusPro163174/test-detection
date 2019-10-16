import { Injectable } from '@angular/core';
import { Api } from './api/api';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api = new Api()
    constructor(private http: HttpClient) { }

    login(data){
        return this.http.post(this.api.getUrlLogin(),{
            email:data.email,
            password:data.password,
            token_nav:'yZBFBVYKiDwoGSh60uUqBxjWCjbjBEz5'
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    register(data:any){
        return this.http.post(this.api.getUrlRegister(),{
            email:data.email,
            password:data.password,
            username:data.username
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
}
