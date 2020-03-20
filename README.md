# Desafio Eyemobile

---
## Teste a API

https://desafio-eyemobile.herokuapp.com/

Um deploy foi realizado no Heroku para testes.

---

***Iniciar o servidor (local)***

` node index.js `

## Recursos

- Autenticação Basic Authentication
- Documentação swagger
- Banco de dados MongoDB (no-SQL)

---

## Estratégia

Para criar as transações foi criado um controller que é responsável pela lógica de criação e exibição dos dados.

No banco de dados, os dados de "Liquido" e "Disponível" são gravados juntamente com todos os outros dados, para facilitar na busca e evitar com que os valores anteriores sejam alterados com a mudança posterior das taxas.

As sintaxes são do ES5, para não necessitar de bunddlers ou ferramentas para transpilar o código.

` Versão do nodeJS utilizada: v12.14.1 `
```shell
Libs:
"basic-auth": "^2.0.1",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"moment": "^2.24.0",
"mongodb": "^3.5.5",
"mongoose": "^5.9.5",
"swagger-jsdoc": "^3.5.0",
"swagger-ui-express": "^4.1.3",
"yup": "^0.28.3" ```
