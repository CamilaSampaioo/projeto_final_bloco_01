# 🌸Projeto Generation de Parfum - Sistema de Gerenciamento de Estoque

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Terminal](https://img.shields.io/badge/interface-terminal-orange)

------------------------------------------------------------------------

O **Generation de Parfum** é uma aplicação de console desenvolvida em **TypeScript** para gerenciar o estoque de uma perfumaria. 
O sistema permite o controle completo de produtos, categorizados entre *Eau de Parfum (EDP)* e *Eau de Toilette (EDT)*.

------------------------------------------------------------------------

## 🚀 Funcionalidades

O sistema segue o padrão CRUD (Create, Read, Update, Delete):

1.  **Cadastrar Novo Perfume**: Registro de produtos com nome, preço, quantidade em estoque e tipo.
2.  **Listar Todos os Perfumes**: Exibição detalhada de todos os itens armazenados.
3.  **Buscar Perfume por ID**: Filtro rápido para localizar um produto específico.
4.  **Atualizar Perfume**: Alteração de dados de produtos já cadastrados.
5.  **Deletar Perfume**: Remoção de itens do sistema.

------------------------------------------------------------------------

## 🛠️ Tecnologias e Conceitos Utilizados

* **Linguagem:** TypeScript
* **Paradigma:** Programação Orientada a Objetos (POO)
* **Arquitetura:** Baseada no padrão MVC (Model-View-Controller)
* **Ferramentas:** Node.js, ts-node, Readline-sync (via classe Input)



------------------------------------------------------------------------

## 📁 Estrutura do Projeto
🌸 Generation de Parfum - Sistema de Gerenciamento de Estoque
    
    ```text
    │
    ├── src/
    │   ├── controller/
    │   ├── model/
    │   ├── repository/
    │   ├── util/
    │   └── Menu.ts
    │
    ├── package.json
    ├── tsconfig.json
    └── README.md

------------------------------------------------------------------------

## 🚀 Como Executar

### 1. Clone o repositório:

``` bash
git clone https://github.com/deboracamposs/Projeto-de-E-commerce---Generation-Brasil.git
```

### 2. Acesse o diretório:

``` bash
cd Projeto-de-E-commerce---Generation-Brasil
```

### 3. Instale as dependências:

``` bash
npm install
```

### 4. Execute o projeto:

``` bash
npx ts-node src/Menu.ts
```

-----------------------------------------------------------------------

## 🧭 Menu da Aplicação

O menu oferece opções como:

    1 - Cadastrar Novo Perfume
    2 - Listar todos os perfumes
    3 - Buscar Perfume por ID
    4 - Atualizar Perfume
    5 - Deletar Perfume
    0 - Sair

Digite o número da opção desejada.

-----------------------------------------------------------------------

## 🔮 Melhorias Futuras (Roadmap)

Como parte do planejamento e orientação ao futuro deste projeto, as seguintes evoluções estão previstas:

- **Persistência de Dados:** Migrar o armazenamento em memória (Arrays) para um banco de dados real (PostgreSQL ou SQLite) ou persistência em arquivos JSON.
- **Categorização Avançada:** Criar um sistema interno para gerenciar categorias além de EDP/EDT (ex: Fragrâncias Amadeiradas, Florais, Cítricas).
- **Interface Gráfica:** Desenvolver uma interface web utilizando **React** ou uma aplicação desktop com **Electron** para substituir o terminal.
- **Distribuição:** Configurar o empacotamento do projeto para gerar um executável `.exe` facilitando o uso por usuários finais.
- **Qualidade de Software:** Implementar testes unitários e de integração utilizando **Jest** para garantir a confiabilidade das operações do `ProdutoController`.
- **Validação de Negócio:** Adicionar regras para impedir preços negativos ou duplicidade de nomes de perfumes.
------------------------------------------------------------------------

## 🧪 Tecnologias Utilizadas

-   **Node.js**
-   **TypeScript**
-   **ts-node**
-   **Colors** (para estilização do terminal)

----------------------------------------------------------------------
  
Conecte-se comigo:

📧  E-mail:    camila.sampaiodev@gmail.com

🔗 LinkedIn:   www.linkedin.com/in/camilalsampaio

🐙 GitHub:     https://github.com/CamilaSampaioo


