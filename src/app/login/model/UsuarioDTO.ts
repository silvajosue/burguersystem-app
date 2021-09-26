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
    public tempoSessao: number;

    get $token(): TokenDTO{
        return this.tokenDTO;
    }

    get $role(): String{
        return this.role;
    }

    get $login(): String{
        return this.nome;
    }

    get $senha(): String{
        return this.senha;
    }

    get $codigoUsuario(): Number{
        return this.codigoUsuario;
    }

    get $tempoSessao(): number{
        return this.tempoSessao
    }

    set $setTempoSessao(data: number){
        this.tempoSessao = data;
    }

}