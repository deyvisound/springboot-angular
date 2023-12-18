# UserManager SpringBoot + Angular

CRUD completo de usuários utilizando o SrpingBoot 3.2 e Angular 17. O projeto contempla validações de cadastro no frontend assim como no backend. 
Testes unitários do consumo da API, dentre outros. 

## Requisitos: 
- Necessário ter o Java 17 configurado no ambiente.
- Interessante ter o docker para rodar o postgreSQL, porém também pode ser configurando o H2db no projeto.
- Maven 3
- Node 10

## Instalado e Rodando o Projeto
Todo procedimento pode ser feito por meio de IDEs como springToolsSuite, VisualCode etc. Porém, mostrarei como fazer sem o auxílio dessas IDEs.

- Clone o projeto: 
``` git clone https://github.com/deyvisound/springboot-angular ```

- Acesse a pasta root do backend( /usermanager ) e suba o container docker:
``` docker compose up ```

*Obs: Caso não queria trabalhar com docker e consequentemente o postgresql, é necessário realizar algumas alterações: *
 - Acesse o arquivo application.properties e comente as configurações do postgresql e, no mesmo arquivo, descomente as configuraçoes do H2db.
 - Acesse o arquivo "usermanager\src\main\resources\schema.sql" e faça o mesmo, comente o comando ***create table***  do postgresql e descomente o do H2db.

- Compilar o projeto:
```mvn clean install```

- Rodar a aplicação:
```mvn spring-boot:run```

- Acesse a pasta root do frontend( /usermanager-cli ) e rode a aplicação:
```npm start```

- Se tudo ocorrer bem, acesse a URL: "[http://localhost:4200](http://localhost:4200)" e lhe será apresentada a tela abaixo: 
![image](https://github.com/deyvisound/springboot-angular/assets/11852582/6404c171-a39a-4674-8124-67d0f910720c)

## Containerizando a Aplicação BackEnd
A aplicação também pode ser completamente iniciada através do **_docker-compose_**.
Para que isso seja possível, você deverá seguir o seguinte procedimento: 

- Dentro da pasta root do projeto( /usermanager ), compile o mesmo:
  
```mvn clean install -DskipTests```

- Acesse o diretório "/src/main/docker" e execute os seguintes comandos:
  
Criando a imagem localmente: 
``` docker build -t usermanager . ```

Subindo o docker compose:
``` docker-compose up ```

- Pronto! Se tudo ocorrer bem, acesse a URL: "[http://localhost:8080](http://localhost:8080)" e lhe será apresentado uma lista de usuários JSon:
```
[
   {
      "id":"b4067893-aceb-4eff-8903-446dea3d174e",
      "name":"Zaxey",
      "email":"zaxey@email.com",
      "password":"$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju",
      "passwordConfirm":null
   },
   {
      "id":"0aec8773-d0b3-4c52-b12e-4cfedc5ae93a",
      "name":"Tinoyko",
      "email":"tinoyko@email.com",
      "password":"$2a$12$aeWJaEWmq2PhYmZtSYHhTubglhJNIBFj4yLTosesStkAXsE86ZSju",
      "passwordConfirm":null
   },
   {
      "id":"cc1690f9-c6fb-4c58-bf05-3331950c3e60",
      "name":"admin",
      "email":"admin@email.com",
      "password":"$2a$12$iJcm10YgZIpBZLKLsgmn.eof/dMWJ3fmYLDD2ZDlw4T3rb4ajwbme",
      "passwordConfirm":null
   }
]
```
