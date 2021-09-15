import { TokenDTO } from "./TokenDTO";

export class UsuarioDTO{
    private codigoUsuario: Number;
	private nome: String;
	private foto: String;
	private cpf: String;
	private telefone: String;
	private  email: String;
	private senha: String;
	private role: String;
	private tokenDTO: TokenDTO;

    $getToken(): TokenDTO{
        return this.tokenDTO;
    }

    $getRole(): String{
        return this.role;
    }

    $getLogin(): String{
        return this.nome;
    }

    $getSenha(): String{
        return this.senha;
    }

}