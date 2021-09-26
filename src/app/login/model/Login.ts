export class Login{
    private email: String;
    private senha: String;

    get $email(): String{
        return  this.email;
    }

    get $senha(): String{
        return this.senha;
    }

    set $senha(senha){
        this.senha = senha;
    }

    set $email(email){
        this.email = email;
    }
}