# É necessário possuir JDK 17, mySQL e NodeJs instalados.

git clone https://github.com/LosSantosBoys/gerenciamento-api.git
Crie um schema com o nome "db_cineapi" no mySQL e ajustar na api o arquivo "application.properties" com user e senha do usuário do mySQL.
Executar a api (localhost:8080 por padrão)
git clone https://github.com/LosSantosBoys/gerenciamento-frontend.git (site)
No diretório principal do projeto, executar npm i no terminal (npm i --force se necessário)
Depois de finalizar a instalação dos pacotes, execute ng serve
Se a execução for sucesso, o site estará na porta:
localhost:4200 (http://localhost:4200/admin/login)
api (swagger) - localhost:8080/swagger-ui/index.html#/
O usuário "zero" para login é:
usuário: fiap
senha: 123456

# Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
