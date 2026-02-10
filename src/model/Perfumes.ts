import { Produto } from "./Produto";

export class Perfumes extends Produto{

     constructor(id: number, nome: string, preco: number, estoque: number, tipo: number) {
        super(id, nome, preco, estoque);
        this.tipo = tipo; 
}
public visualizar(): void {
        super.visualizar();

        let categoria = "";

        switch (this.tipo) { 
            case 1:
                categoria = "Perfume Eau de Parfum";
                break;
            case 2:
                categoria = "Perfume Eau de Toilette";
                break;
                
        }

        console.log("Categoria: " + categoria);
    }
}
