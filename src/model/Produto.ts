export abstract class Produto {

     private _id: number;
     private _nome: string;
     private _preco: number;
     private _estoque: number;
    tipo: any

	constructor(id: number, nome: string, preco: number, estoque: number) {
		this._id = id;
		this._nome = nome;
		this._preco = preco;
		this._estoque = estoque;
        
	}


	public get id(): number {
		return this._id;
	}


	public get nome(): string {
		return this._nome;
	}


	public get preco(): number {
		return this._preco;
	}


	public get estoque(): number {
		return this._estoque;
	}


	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._nome = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}


	public set estoque(value: number) {
		this._estoque = value;
	}


	  public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Preço: R$ " + this._preco.toFixed(2));
        console.log("Estoque: " + this._estoque);

}

}
