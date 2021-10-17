import { ClienteDTO } from "./ClienteDTO";

export class EnderecoDTO{
    public id: Number;
    public cliente: ClienteDTO;
    public logradouro: String;
    public numero: Number;
    public bairro: String;
    public cidade: String;
    public complemento: String;
}