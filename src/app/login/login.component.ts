import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public data : any = [];

    constructor(private auth: AuthService) { }

    ngOnInit() {
    }

    login(){
        console.log(this.data)
        this.auth.login(this.data).subscribe((res:any) =>{
            alert("logeado correctamente");
            alert("Nombre de usuario: "+res.user.username)
            console.log(res.user.username)
        },error =>{
            alert("error: "+error.message)
        });
    }

}
