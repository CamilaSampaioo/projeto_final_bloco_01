"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var iconv = require("iconv-lite");
/**
 * Classe Input - Solução para leitura de caracteres acentuados com o readline-sync no Windows
 *
 * 🔴 PROBLEMA:
 * - No Windows, o console usa a codificação CP850 (não UTF-8)
 * - Quando você digita "João", o console envia bytes em CP850
 * - O Node.js interpreta como UTF-8 e fica "Joo" (perde os acentos)
 *
 * ✅ SOLUÇÃO:
 * - Esta classe converte automaticamente CP850 → UTF-8
 * - Você digita "João" e a variável recebe "João" corretamente!
 */
var Input = /** @class */ (function () {
    function Input() {
    }
    /**
     * 🔍 Detecta qual encoding o console do Windows está usando
     */
    Input.detectarEncoding = function () {
        if (this.configurado)
            return;
        if (process.platform === 'win32') {
            try {
                var execSync = require('child_process').execSync;
                var resultado = execSync('chcp', {
                    encoding: 'utf8',
                }).toString();
                var match = resultado.match(/\d+/);
                if (match) {
                    var codePage = match[0];
                    this.encodingConsole =
                        codePage === '65001'
                            ? 'utf8'
                            : codePage === '850'
                                ? 'cp850'
                                : codePage === '1252'
                                    ? 'cp1252'
                                    : "cp".concat(codePage);
                }
            }
            catch (error) {
                this.encodingConsole = 'cp850';
            }
        }
        else {
            this.encodingConsole = 'utf8';
        }
        this.configurado = true;
    };
    /**
     * 🔧 Converte uma string UTF-8 para o encoding do console
     */
    Input.converterParaConsole = function (texto) {
        var buffer = iconv.encode(texto, this.encodingConsole);
        return buffer.toString('binary');
    };
    /**
     * 🔧 Converte bytes do console para UTF-8
     */
    Input.converterDoConsole = function (textoRaw) {
        var buffer = Buffer.from(textoRaw, 'binary');
        return iconv.decode(buffer, this.encodingConsole);
    };
    /**
     * 🔧 Prepara as configurações para uso com readline-sync
     */
    Input.prepararConfig = function (config) {
        this.detectarEncoding();
        var configFinal = __assign({ encoding: 'binary' }, config);
        // Converte defaultInput se existir
        if ((config === null || config === void 0 ? void 0 : config.defaultInput) !== undefined) {
            configFinal.defaultInput = this.converterParaConsole(String(config.defaultInput));
        }
        // Converte limitMessage se existir
        if (config === null || config === void 0 ? void 0 : config.limitMessage) {
            configFinal.limitMessage = this.converterParaConsole(config.limitMessage);
        }
        return configFinal;
    };
    /**
     * 📝 Lê uma linha de TEXTO com acentuação correta
     *
     * 💡 QUANDO USAR:
     * - Para ler nomes: "João", "José", "María"
     * - Para ler endereços: "Rua São Paulo"
     * - Para ler qualquer texto com acentos
     *
     * 📖 EXEMPLOS:
     * const nome = Input.question('Digite seu nome: ')
     * const cidade = Input.question('Digite sua cidade: ', { defaultInput: 'São Paulo' })
     */
    Input.question = function (pergunta, config) {
        var readlinesync = require('readline-sync');
        var perguntaConvertida = this.converterParaConsole(pergunta);
        var configFinal = this.prepararConfig(config);
        var respostaRaw = readlinesync.question(perguntaConvertida, configFinal);
        return this.converterDoConsole(respostaRaw);
    };
    /**
     * 🔢 Lê um número INTEIRO com validação automática (USA O MÉTODO NATIVO!)
     *
     * 💡 QUANDO USAR:
     * - Para idade: 25, 30, 18
     * - Para quantidade: 5, 10, 100
     * - Para opções de menu: 1, 2, 3
     * - Para qualquer número SEM casas decimais
     *
     * 📖 EXEMPLOS:
     * const idade = Input.questionInt('Digite sua idade: ')
     * const opcao = Input.questionInt('Escolha (1-3): ', { limit: [1, 2, 3] })
     * const quantidade = Input.questionInt('Quantidade: ', { defaultInput: 1 })
     *
     * ✅ VANTAGENS:
     * - Usa a validação NATIVA do readline-sync
     * - Suporta limit, limitMessage, defaultInput
     * - Rejeita automaticamente valores inválidos
     * - Mensagem de erro padrão em português
     */
    Input.questionInt = function (pergunta, config) {
        var readlinesync = require('readline-sync');
        var perguntaConvertida = this.converterParaConsole(pergunta);
        // Define mensagem padrão em português se não foi fornecida
        var configComMensagem = __assign({ limitMessage: 'Digite um numero inteiro!' }, config);
        var configFinal = this.prepararConfig(configComMensagem);
        // USA O MÉTODO NATIVO questionInt() do readline-sync!
        return readlinesync.questionInt(perguntaConvertida, configFinal);
    };
    /**
     * 💰 Lê um número DECIMAL com validação automática (USA O MÉTODO NATIVO!)
     *
     * 💡 QUANDO USAR:
     * - Para preço: 19.90, 100.50
     * - Para altura: 1.75, 1.80
     * - Para peso: 70.5, 65.3
     * - Para nota: 8.5, 9.0
     * - Para qualquer número COM casas decimais
     *
     * 📖 EXEMPLOS:
     * const preco = Input.questionFloat('Digite o preço: ')
     * const altura = Input.questionFloat('Digite sua altura (m): ', { limit: [1.0, 2.5] })
     * const nota = Input.questionFloat('Digite a nota: ', { defaultInput: 0.0 })
     *
     * ✅ VANTAGENS:
     * - Usa a validação NATIVA do readline-sync
     * - Suporta limit, limitMessage, defaultInput
     * - Aceita tanto inteiros quanto decimais
     * - Mensagem de erro padrão em português
     */
    Input.questionFloat = function (pergunta, config) {
        var readlinesync = require('readline-sync');
        var perguntaConvertida = this.converterParaConsole(pergunta);
        // Define mensagem padrão em português se não foi fornecida
        var configComMensagem = __assign({ limitMessage: 'Digite um numero decimal!' }, config);
        var configFinal = this.prepararConfig(configComMensagem);
        // USA O MÉTODO NATIVO questionFloat() do readline-sync!
        return readlinesync.questionFloat(perguntaConvertida, configFinal);
    };
    /**
     * 📋 Exibe um menu de opções para o usuário escolher
     *
     * 💡 QUANDO USAR:
     * - Para menu principal do programa
     * - Para escolher entre várias opções
     * - Para campos do tipo SELECT (como em formulários)
     *
     * 📖 EXEMPLO:
     * const opcoes = ['Cadastrar', 'Listar', 'Sair']
     * const escolha = Input.keyInSelect(opcoes, 'Escolha uma opção: ')
     *
     * if (escolha === 0) {
     *   console.log('Você escolheu Cadastrar')
     * } else if (escolha === 1) {
     *   console.log('Você escolheu Listar')
     * } else if (escolha === 2) {
     *   console.log('Você escolheu Sair')
     * } else {
     *   console.log('Você cancelou') // escolha === -1
     * }
     */
    Input.keyInSelect = function (opcoes, pergunta, config) {
        var _this = this;
        this.detectarEncoding();
        var readlinesync = require('readline-sync');
        var perguntaConvertida = this.converterParaConsole(pergunta);
        var opcoesConvertidas = opcoes.map(function (opcao) { return _this.converterParaConsole(opcao); });
        return readlinesync.keyInSelect(opcoesConvertidas, perguntaConvertida, config);
    };
    /**
     * ❓ Faz uma pergunta SIM ou NÃO (modo estrito)
     *
     * 💡 QUANDO USAR:
     * - Para confirmar ações: "Deseja realmente excluir?"
     * - Para perguntas sim/não: "Você é maior de idade?"
     * - Quando precisa de uma resposta clara (Y ou N)
     *
     * 📖 EXEMPLOS:
     * const confirmou = Input.keyInYNStrict('Deseja continuar? ')
     * if (confirmou) {
     *   console.log('Usuário confirmou!')
     * } else {
     *   console.log('Usuário negou!')
     * }
     */
    Input.keyInYNStrict = function (pergunta, config) {
        this.detectarEncoding();
        var readlinesync = require('readline-sync');
        var perguntaConvertida = this.converterParaConsole(pergunta);
        return readlinesync.keyInYNStrict(perguntaConvertida, config);
    };
    /**
     * ⏸️ Pausa o programa e aguarda o usuário pressionar ENTER
     *
     * 💡 QUANDO USAR:
     * - Para pausar o programa: "Pressione ENTER para continuar..."
     * - Para o usuário ler mensagens antes de limpar a tela
     * - Para criar "breakpoints" no fluxo do programa
     */
    Input.prompt = function () {
        var readlinesync = require('readline-sync');
        readlinesync.prompt();
    };
    /**
     * 🔍 Retorna qual encoding está sendo usado
     *
     * 💡 QUANDO USAR:
     * - Para DEBUGAR problemas de acentuação
     * - Para verificar se está usando UTF-8 ou CP850
     */
    Input.getEncoding = function () {
        this.detectarEncoding();
        return this.encodingConsole;
    };
    /** Controla se já detectou o encoding (detecta apenas uma vez) */
    Input.configurado = false;
    /** Armazena o encoding do console (cp850, cp1252 ou utf8) */
    Input.encodingConsole = 'cp850';
    return Input;
}());
exports.Input = Input;
