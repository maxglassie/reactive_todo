'use strict'

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const ekgRouter = require('./routes/ekg');
const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/ekg', ekgRouter);
app.use('/todos', todosRouter);

module.exports = app;

// kafka - produces to kafka when receives a POST 
// how does it do that - does it just send the message as is? 
// consumes from kafka and prints it
// no-kafka npm