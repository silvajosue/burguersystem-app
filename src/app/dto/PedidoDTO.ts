import { ClienteDTO } from "./ClienteDTO";
import { EnderecoDTO } from "./EnderecoDTO";

export class PedidoDTO{
    cliente: ClienteDTO;
    endereco: EnderecoDTO;
    mesa: number;
    preco_total: number;
    status: String;  
  }