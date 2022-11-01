const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().required().min(2).max(30),
    password: Joi.string().required().min(6).max(30),
    email: Joi.string().email().required(),
    avatar: Joi.string().uri(),
    posts: Joi.array()
});


module.exports = schema

