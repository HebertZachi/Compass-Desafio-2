# Compass-Desafio-2
Esse é um repositório com o desafio 2 da programa de bolsa natura


# Compass-API
API com Express e MongoDB - Operações de CRUD e Login

<a href="./LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

<img src="https://s3.amazonaws.com/gupy5/production/companies/417/career/35254/images/2021-11-05_19-02_logo.png" alt="img" align="right" width="150px">

## Description

Compass API é uma aplicação backend construída durante a semana do 2° Desafio do programa de bolsas Compass UOL/Natura Node.js

A aplicação consiste em realizar operações de CRUD e autenticação de login, onde os dados são coletados através de ferramentas como Postman ou Insomnia, e depois são armazenados em um banco de dados.

## Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)

# Starting

## Clone
    git clone https://github.com/HebertZachi/Compass-Desafio-2.git

# Requirements

[Node.js](https://nodejs.org/en/)
<br>
[MongoDB](https://www.mongodb.com/pt-br)

## Dependencies Installation with NPM
    npm install

## Start Server
    npm start

## Environment variables

Definição de variaveis de ambiente no arquivo ***config.env***
    
    JWT_SECRET=123
    JWT_EXPIRATION=7d
    PORT=3333
    DATABASE=mongodb+srv://hebert:<password>@cluster0.nj3rrdc.mongodb.net/test
    DATABASE_PASSWORD=123

Agora que o ambiente está funcionando é possível enviar requisições ao servidor através do [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/)

## Routes

1. Default Route<br>

   - http://localhost:3333/api/v1/
2. Events Routes<br>

   - GET http://localhost:3333/api/v1/events
   - POST http://localhost:3333/api/v1/events
   - GET http://localhost:3333/api/v1/events/:id
   - PUT http://localhost:3333/api/v1/events/:id
   - DELETE http://localhost:3333/api/v1/events/:id
   
3. Users Routes<br>

   - GET http://localhost:3333/api/v1/users
   - POST http://localhost:3333/api/v1/users/signUp
   - POST http://localhost:3333/api/v1/users/signIn
   - GET http://localhost:3333/api/v1/user/:id
   - PATCH http://localhost:3333/api/v1/user/:id
   - DELETE http://localhost:3333/api/v1/user/:id

## JSON Template App

### 1. Events Template
    {
      "description": "Esse é um evento de exemplo",
      "userId": "63e34f3b854f9881d23b99a9",
      "dateTime": "2023-01-05T14:47:32.962Z"
    }    
    
### 2. Users Template
    {
      "firstName": "Hebert",
      "lastName": "Viana",
      "birthDate": "2023-01-01",
      "city": "Osasco",
      "country": "Brazil",
      "email": "test@example.com",
      "password": "123",
      "confirmPassword": "123"
    }     
