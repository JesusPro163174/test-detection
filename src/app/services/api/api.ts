export class Api{
    private host         = "http://35.184.67.157:3333";
    private authLogin    = "/api/v1/auth/login";
    private authRegister = "/api/v1/auth/register";

    public getUrlLogin(){
        return this.host+this.authLogin;
    }
    public getUrlRegister(){
        return this.host+this.authRegister;
    }

}