module.exports = {
  env: process.env.ENV || 'dev',
  port: process.env.PORT || 3456,
  db: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'calorie_tracker',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
  jwtSecret: 'data_secret_2022',
  jwtExpirationInSeconds: 36000,
  authToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6IkFkbWluIn0.HFn8y9Nkby-oEtbR7zeitbmZgjMIxgSxsEY_ofdytGk',
};
