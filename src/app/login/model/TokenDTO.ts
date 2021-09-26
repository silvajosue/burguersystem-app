export class TokenDTO{
    private token: String;
	private tipo: String;

    get $token(): String{
        return this.token;
    }

    get $tipo(): String{
        return this.tipo;
    }
    
    set $token(token) {
        this.token = token;
    }

    set $tipo(tipo){
        this.tipo = tipo;
    }
}