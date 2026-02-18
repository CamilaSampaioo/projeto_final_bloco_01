import { ProdutoController } from "./src/controller/ProdutoController";
import { Perfumes } from "./src/model/Perfumes";
import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

const produtoController = new ProdutoController();

export function main() {
    criarProdutosTeste();

    let opcao: number;

    while (true) {
        console.log(Colors.bg.black, Colors.fg.yellow);
        console.log("╔═══════════════════════════════════════════════════╗");
        console.log("║             ✨ GENERATION DE PARFUM ✨            ║");
        console.log("╠═══════════════════════════════════════════════════╣");
        console.log("║                                                   ║");
        console.log("║      1 - 🆕 Cadastrar Novo Perfume                ║");
        console.log("║      2 - 📑 Listar Todos os Perfumes              ║");
        console.log("║      3 - 🔍 Buscar Perfume por ID                 ║");
        console.log("║      4 - 🔄 Atualizar Perfume                     ║");
        console.log("║      5 - 🗑️ Deletar Perfume                        ║");
        console.log("║      0 - 🚪 Sair                                  ║");
        console.log("║                                                   ║");
        console.log("╚═══════════════════════════════════════════════════╝");
        console.log(Colors.reset);

        console.log(Colors.fg.whitestrong, '\nEntre com a opção desejada: ');
        opcao = Input.questionInt("");
        console.log(Colors.reset);

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nGENERATION DE PARFUM!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.magenta, '\nCadastrar Novo Perfume \n', Colors.reset);
                cadastrarPerfume();
                break;

            case 2:
                console.log(Colors.fg.magenta, '\nListar Todos os Perfumes  \n', Colors.reset);
                listarPerfumes();
                break;

            case 3:
                console.log(Colors.fg.magenta, '\nBuscar Perfume por ID  \n', Colors.reset);
                buscarPerfume();
                break;

            case 4:
                console.log(Colors.fg.magenta, '\nAtualizar Perfume  \n', Colors.reset);
                atualizarPerfume();
                break;

            case 5:
                console.log(Colors.fg.magenta, '\nDeletar Perfume \n', Colors.reset);
                deletarPerfume();
                break;

            default:
                console.log(Colors.fg.red, '\nOpção inválida!\n', Colors.reset);
                keyPress();
                break;

        }
    }
}

// Case 1 : Cadastrar Novo Perfume 
function cadastrarPerfume(): void {

    let nome = Input.question("Digite o Nome do Perfume: ");
    let preco = Input.questionFloat("Digite o Preco: ");
    let estoque = Input.questionInt("Digite a Quantidade em Estoque: ");
    let tipo = Input.questionInt("Tipo (1-EDP ou 2-EDT): ");

    produtoController.cadastrar(
        new Perfumes(produtoController.gerarId(), nome, preco, estoque, tipo)
    );

    keyPress();
}

// Case 2 : Listar Todos os Perfumes
function listarPerfumes(): void {

    produtoController.listarTodos();
    keyPress();
}

// Case 3 : Buscar Perfume por ID
function buscarPerfume(): void {

    let idBusca = Input.questionInt("Digite o ID do perfume: ");
    produtoController.procurarPorId(idBusca);
    keyPress();
}

// Case 4 : Atualizar Perfume
function atualizarPerfume(): void {

    let idAtualizar = Input.questionInt("Digite o ID do perfume que deseja atualizar: ");

    let buscaProduto = produtoController.buscarNoArray(idAtualizar);

    if (buscaProduto !== null) {
        let nomeAt = Input.question("Digite o Novo Nome: ");
        let precoAt = Input.questionFloat("Digite o Novo Preco: ");
        let estoqueAt = Input.questionInt("Digite o Novo Estoque: ");
        let tipoAt = Input.questionInt("Novo Tipo (1-EDP ou 2-EDT): ");

        produtoController.atualizar(
            new Perfumes(idAtualizar, nomeAt, precoAt, estoqueAt, tipoAt)
        );
    } else {
        console.log(Colors.fg.red, `\nO produto ID ${idAtualizar} não foi encontrado!`, Colors.reset);
    }

    keyPress();
}

// Case 5 : Deletar Perfume
function deletarPerfume(): void {

    let idDeletar = Input.questionInt("Digite o ID do perfume que deseja excluir: ");
    produtoController.deletar(idDeletar);
    keyPress();
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

function sobre(): void {
    console.log(Colors.fg.whitestrong);
    console.log("╔═══════════════════════════════════════════════════════╗");
    console.log("║                📌 INFORMAÇÕES DO PROJETO              ║");
    console.log("╠═══════════════════════════════════════════════════════╣");
    console.log("║                                                       ║");
    console.log("║  👩‍💻 Desenvolvedora: Camila Sampaio                  ║");
    console.log("║  📧 E-mail:         camila.sampaiodev@gmail.com       ║");
    console.log("║  🔗 LinkedIn:       linkedin.com/in/camilalsampaio    ║");
    console.log("║  🐙 GitHub:         github.com/CamilaSampaioo         ║");
    console.log("║                                                       ║");
    console.log("╚═══════════════════════════════════════════════════════╝");
    console.log(Colors.reset);
}

function criarProdutosTeste(): void {

    // Cadastrando alguns Perfumes EDP (Tipo 1)
    produtoController.cadastrar(new Perfumes(produtoController.gerarId(), 'Sauvage Dior', 650.00, 10, 1));
    produtoController.cadastrar(new Perfumes(produtoController.gerarId(), 'Bleu de Chanel', 800.00, 5, 1));

    // Cadastrando alguns Perfumes EDT (Tipo 2)
    produtoController.cadastrar(new Perfumes(produtoController.gerarId(), 'Ck One', 250.00, 20, 2));
    produtoController.cadastrar(new Perfumes(produtoController.gerarId(), 'Invictus', 450.00, 15, 2));

    console.log(Colors.fg.green, "\nDados de teste carregados com sucesso!", Colors.reset);
}



main();