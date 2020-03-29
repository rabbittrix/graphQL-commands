## GraphQL - schema-query

# Usando o Apollo server

# Important:

Querys - is used to make consultations.
Mutations - used to make changes with, for example, the database.
Resolvers - where you put all your logical code to solve both Mutations and Querys.

# Dependency - npm i -s graphql-import

# Don´t forget imput on package.json - "start": "nodemon --ext js,graphql"

# Creating Tables with the knex framework

npx knex migrate:make tabela_perfis
npx knex migrate:make tabela_users
npx knex migrate:make tabela_users_perfis
npx knex migrate:latest - create table on database
npx knex migrate:rollback - delete table create

# Commands

npm i -s knex mysql
npx knex init - create file

# code runner
ctrl + Alt + N - run code
ctrl + Alt + M - stop code

npm i
npm start
