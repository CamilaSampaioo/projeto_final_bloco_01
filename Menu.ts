import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

export function main() {

    let opcao: number;

    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow,
          "*****************************************************");
        console.log("      2 - Listar Perfumes Cadastrados      ");
        console.log("      3 - Buscar Perfume por ID            ");
        console.log("      4 - Atualizar Perfume                ");
        console.log("      5 - Deletar Perfume                  ");
        console.log("      0 - Sair                             ");
        console.log("===========================================");

        console.log("Entre com a opção desejada:");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong,"\nGENERATION DE PARFUM!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
           
        }

        switch (opcao) {
            case 1:
                console.log("\nFuncionalidade de CADASTRAR perfume (Etapa 2).");
                keyPress();
                break;

            case 2:
                console.log("\nFuncionalidade de LISTAR perfumes (Etapa 2).");
                keyPress();
                break;

            case 3:
                console.log("\nFuncionalidade de BUSCAR perfume por ID (Etapa 2).");
                keyPress();
                break;

            case 4:
                console.log("\nFuncionalidade de ATUALIZAR perfume (Etapa 2).");
                keyPress();
                break;

            case 5:
                console.log("\nFuncionalidade de DELETAR perfume (Etapa 2).");
                keyPress();
                break;

            default:
                console.log("\nOpção inválida!");
                keyPress();
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por:                              ");
    console.log("Camila Sampaio - camila.sampaiodev@gmail.com           ");
    console.log("www.linkedin.com/in/camilalsampaio                     ");
    console.log("https://github.com/CamilaSampaioo"                      );
    console.log("*****************************************************  ");
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

main();