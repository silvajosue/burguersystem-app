import { Role } from "src/app/dto/Role";
import { TokenDTO } from "./TokenDTO";

export class UsuarioDTO{
    private codigoUsuario: Number;
	public nome: String;
	public foto: String;
	public cpf: String;
	public telefone: String;
	public  email: String;
	private senha: String;
	public role: String;
	public tokenDTO: TokenDTO;
    public tempoSessao: number;
    public roles: Role = new Role();
    public ativo: Boolean

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

    set $senha(senha: String){
        this.senha = senha;
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

    set $email(email: String){
        this.email = email
    }

}