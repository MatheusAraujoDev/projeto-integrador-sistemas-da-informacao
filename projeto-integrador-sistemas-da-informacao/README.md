# Landing Page - Cupcakes Gourmet (MVC)

Este repositório contém uma Landing Page dinâmica para uma loja de cupcakes gourmet, desenvolvida como parte do Projeto Integrador de Sistemas da Informação.

## Explicação

Este projeto é uma aplicação web construída utilizando a arquitetura MVC (Model-View-Controller) para manter o código organizado e escalável. O back-end é desenvolvido com **Node.js** e o framework **Express**, que lidam com o roteamento e as requisições do servidor. Para o armazenamento de dados, utilizamos um banco de dados **SQLite** (gerenciado pelo *Model*), que guarda e fornece as informações do cardápio, como sabores, descrições e preços dos cupcakes. O *Controller* atua como a ponte da aplicação, buscando esses dados no banco de dados e enviando-os para a nossa *View* (arquivos HTML, CSS e JavaScript puro no front-end). Assim, quando o usuário acessa a página, o JavaScript faz uma requisição ao servidor e renderiza os cupcakes dinamicamente na tela de forma fluida.

**Como interagir e fazer alterações dinâmicas:**
Como o cardápio é alimentado pelo banco de dados, você não precisa alterar o código HTML para adicionar ou remover produtos. Para fazer modificações manuais, você pode utilizar uma ferramenta de visualização (como o *DB Browser for SQLite* ou extensões do VS Code) para abrir o arquivo local `cupcakes.db` e adicionar, editar ou deletar registros diretamente na tabela `cupcakes`. Ao salvar o arquivo, as mudanças aparecerão automaticamente no site ao atualizar a página. Além disso, a arquitetura MVC permite que o projeto seja facilmente expandido no futuro: você pode criar novas rotas no Express (como requisições `POST`, `PUT` e `DELETE` no Controller) para interagir com o banco via código, abrindo caminho para a criação de um painel de administração visual (Admin UI).

## Como configurar e rodar o projeto (Setup)

Siga os passos abaixo para executar este projeto localmente na sua máquina:

### Pré-requisitos
* Ter o **[Node.js](https://nodejs.org/)** instalado (a instalação padrão já inclui o gerenciador de pacotes `npm`).

### Passo a Passo

1. **Acesse a pasta do projeto:**
   Abra o seu terminal ou prompt de comando e navegue até o diretório raiz do projeto (onde o arquivo `package.json` está localizado):
   ```bash
   cd caminho/para/o/projeto-integrador-sistemas-da-informacao
   ```

2. **Instale as dependências:**
   Execute o comando abaixo para baixar e instalar os pacotes necessários (`express` e `sqlite3`):
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   Com as dependências instaladas, inicie o servidor rodando:
   ```bash
   npm start
   ```
   *(Alternativamente, você pode usar `node server.js`)*

4. **Acesse a aplicação:**
   Se tudo estiver correto, você verá uma mensagem no terminal dizendo `Server running at http://localhost:3000`. 
   Abra o seu navegador de preferência e acesse:
   **[http://localhost:3000](http://localhost:3000)**

O banco de dados será criado automaticamente (arquivo `cupcakes.db`) e populado com os dados iniciais assim que o servidor for executado pela primeira vez.