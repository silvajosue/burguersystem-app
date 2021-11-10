import { ProdutoDTO } from "../produto/model/ProdutoDTO";
import { MaterialDTO } from "./MaterialDTO";

export class ComposicaoDTO{
    public id: Number;
    public produto: ProdutoDTO;
    public materiais: MaterialDTO[];
    public quantidade: Number;
    public medida: String;
    public nome: String;
    public foto: String;
}