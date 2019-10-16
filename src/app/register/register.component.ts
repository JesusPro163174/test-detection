import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public data: any = [];
    constructor(private auth: AuthService) { }

    ngOnInit() {
    }

    register() {
        this.auth.register(this.data).subscribe((res:any)=>{
            console.log(res.user.username);
            alert("Registrado: "+res.user.username);
        },error=>{
            alert("error: "+error.message+" Code: "+error.code)
        })
    }
}
