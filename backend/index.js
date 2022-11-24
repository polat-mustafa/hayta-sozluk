const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./mongo-connection');
const dotenv = require('dotenv');
const helmet = require('helmet');

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const indexRouter = require('./routes/index');
const categoryRouter = require('./routes/categories');
const authRouter = require('./routes/auth');
const registerRouter = require('./routes/register');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

dotenv.config();

app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/categories', categoryRouter);
app.use('/login', authRouter);
app.use('/register', registerRouter);

module.exports = app;