const express = require('express');
// const morgan = require('morgan');

const EventRouter = require('./routes/Events');
const UserRouter = require('./routes/User');

const app = express();

app.use(express.json());

// 3) ROUTES
app.use('/api/v1/', EventRouter);
app.use('/api/v1/', UserRouter);

module.exports = app;