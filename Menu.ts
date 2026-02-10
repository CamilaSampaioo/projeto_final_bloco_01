import { Perfumes } from "./src/model/Perfumes";
import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";


export function main() {

    let opcao: number;

    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow,
          "*****************************************************");
        console.log("      1 - Cadastrar Novo Perfume           ");
        console.log("      2 - Listar Todos os Perfumes          ");
        console.log("      3 - Buscar Perfume por ID            ");
        console.log("      4 - Atualizar Perfume                ");
        console.log("      5 - Deletar Perfume                  ");
        console.log("      0 - Sair                             ");
        console.log("===========================================", Colors.reset);

        console.log(Colors.fg.whitestrong, '\nEntre com a opção desejada: ');
        opcao = Input.questionInt("");
        console.log(Colors.reset);

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong,"\nGENERATION DE PARFUM!");
            sobre();
            console.log(Colors.reset, "");

            sobre();
            process.exit(0);
           
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.magenta, '\nCadastrar Novo Perfume \n', Colors.reset);

                keyPress();
                break;

            case 2:
                  console.log(Colors.fg.magenta, '\nListar Todos os Perfumes  \n', Colors.reset);


                keyPress();
                break;

            case 3:
                console.log(Colors.fg.magenta, '\nBuscar Perfume por ID  \n', Colors.reset);

                keyPress();
                break;

            case 4:
                console.log(Colors.fg.magenta, '\nAtualizar Perfume  \n', Colors.reset);

                keyPress();
                break;

            case 5:
                console.log(Colors.fg.magenta, '\nDeletar Perfume \n', Colors.reset);
                keyPress();
                break;

            default:
                 console.log(Colors.fg.red, '\nOpção inválida!\n', Colors.reset);
                keyPress();
                break;
        }
    }
}



function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por:                              ");
    console.log("Camila Sampaio - camila.sampaiodev@gmail.com           ");
    console.log("www.linkedin.com/in/camilalsampaio                     ");
    console.log("https://github.com/CamilaSampaioo"                      );
    console.log("*****************************************************  ");
}


main();