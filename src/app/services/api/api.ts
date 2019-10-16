export class Api{
    private host      = "http://35.184.67.157:3335";
    private authLogin = "/api/v1/auth/login";

    public getUrlLogin(){
        return this.host+this.authLogin;
    }

}