# Controle Financeiro Pessoal
Esta aplicação tem como objetivo gerenciar os rendimentos e os gastos mês a mês para o controle financeiro pessoal.

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy
https://maxlmuller.github.io/controle-financeiro-pessoal/

## Protótipo
https://www.figma.com/file/jFKVn3mAP7Q7ur3PKiJkgB/Controle-Financeiro-Pessoal

## Relatório de Apresentação
https://github.com/maxlmuller/controle-financeiro-pessoal/blob/main/Relat%C3%B3rio%20de%20Apresenta%C3%A7%C3%A3o.pdf

##  Checklist

- [X]  Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X]  Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X]  Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X]  Construir páginas web com o conceito de componentes.
- [X]  Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X]  Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X]  Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X]  Mapear componentes à rotas no módulo de rotas.
- [X]  Criar navegação entre páginas por meio de rotas.
- [X]  Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [X]  Validar campos do formulário com REGEX e apresentar os erros.
- [X]  Desabilitar o botão de submit enquanto o formulário está inválido.
- [X]  Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [X]  Cadastrar uma entidade no JSON Server.
- [X]  Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [X]  Usar a diretiva ngIf
- [X]  Formatar a apresentação de dados com Pipes.
- [X]  Build e deploy da aplicação.


## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`
