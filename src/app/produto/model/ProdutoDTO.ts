import { CategoriaDTO } from "src/app/dto/CategoriaDTO";

export class ProdutoDTO{
    public id: Number;
    public categoria: CategoriaDTO;
    public nome: String;
    public preco: Number;
    public foto: String;
    public quantidadeEst: Number;
}