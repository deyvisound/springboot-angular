# UserManager SpringBoot + Angular
## CRUD de usuário com SpringBoot 3 e Angular 17

CRUD completo de usuários utilizando o SrpingBoot 3.2 e Angular 17. O projeto contempla validações de cadastro no frontend assim como no backend. 
Testes unitários do consumo da API, dentre outros. 

## Requisitos: 
- Necessário ter o Java 17 configurado no ambiente.
- Interessante ter o docker para rodar o postgreSQL, porém também pode ser configurando o H2db no projeto.
- Maven 3
- Node 10

## Intalado e Rodando o Projeto
Todo procedimento pode ser feito por meio de IDEs como springToolsSuite, VisualCode etc. Porém, mostrarei como fazer sem o auxílio dessas IDEs.

- Clone o projeto: 
``` git clone https://github.com/deyvisound/springboot-angular ```
- Acesse a pasta root do backend( /usermanager ) e suba o container docker:
``` docker compose up ```
*Obs: Caso não queria trabalhar com docker e consequentemente o postgresql, é necessário realizar algumas alterações: *
 - Acesse o arquivo application.properties e comente as configurações do postgresql e, no mesmo arquivo, descomenta as configuraçoes do H2db.
 - Acesse o arquivo "usermanager\src\main\resources\schema.sql" e faça o mesmo, comente o comando ***create table***  do postgresql e descomente o do H2db.

- Compilar o projeto:
```mvn clean install```
- Rodar a aplicação:
```mvn spring-boot:run```

- Acesse a pasta root do frontend( /usermanager-cli ) e rode a aplicação:
```npm start```
