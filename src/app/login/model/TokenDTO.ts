export class TokenDTO{
    public token: String;
	public tipo: String;

    getToken(): String{
        return this.token;
    }

    getTipo(): String{
        return this.tipo;
    }
}