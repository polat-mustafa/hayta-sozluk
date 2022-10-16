const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./mongo-connection');


const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const indexRouter = require('./routes/index');
const categoryRouter = require('./routes/categories');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/categories', categoryRouter);

module.exports = app;