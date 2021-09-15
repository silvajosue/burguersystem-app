export class TokenDTO{
    private token: String;
	private tipo: String;

    $getToken(): String{
        return this.token;
    }

    $getTipo(): String{
        return this.tipo;
    }
}