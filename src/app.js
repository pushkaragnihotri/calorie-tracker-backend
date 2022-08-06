const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./middlewares/debugLogger');
const responseHandler = require('./middlewares/responseHandler');
const adminRoutes = require('./routes/admin.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(responseHandler);

app.use('/calorie-tracker-backend/admin', logger, adminRoutes);
app.use('/calorie-tracker-backend/user', logger, userRoutes);

app.get('/ping', logger, (req, res) => {
  res.success(`Server is working fine on ${Date.now()}`, req.header);
});

module.exports = app;
