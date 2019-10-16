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
        this.auth.login(this.data).subscribe();
    }

}
