# Calorie Tracker Backend

> A simple calorie tracking app where users should be able to enter their food entries along with the number of calories for each food entry.

## Tech Stack

1. Node.js & Express
2. MySQL & Sequelize

## Instructions to setup

### Prerequisites

1. Node version > 4
2. MySQL installed
3. Postman (To test APIs)

### Steps to follow

1. `git clone https://github.com/pushkaragnihotri/calorie-tracker-backend`
2. `npm i # install dependencies`
3. `npm run start # run the server`
4. `import postman collection in postman to run apis`

## Important commands

- npx sequelize-cli model:generate --name `model-name` --attributes `name:string,enabled:BOOLEAN,success:BOOLEAN,syncTime:DATE`
- npx sequelize-cli seed:generate --name `seeder-name`
- npx sequelize-cli migration:generate --name `migration-name`
