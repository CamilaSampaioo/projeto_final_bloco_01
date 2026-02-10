import { Produto } from "../model/Produto";

export interface ProdutoRepository extends Produto{


    // CRUD
    pesquisarProdutoId(id: number): void;
    pesquisarProdutoNome(nome: string): void;
    listarProdutos(): void;
    cadastrarProduto(produto: Produto): void;
    atualizarProduto(id: number | string, produto: Produto): void;
    deletarProduto(id: number): void;
}