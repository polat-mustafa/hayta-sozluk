const Joi = require('joi');

const userValidation = Joi.object({
    username: Joi.string().required().min(2).max(200),
    password: Joi.string().required().min(6).max(30),
    email: Joi.string().email().required(),
    avatar: Joi.string().uri(),
    posts: Joi.array()
});

const loginValidation = Joi.object({
    password: Joi.string().required().min(6).max(30),
    username: Joi.string().required().min(2).max(200),
});

const registerValidation = Joi.object({
    username: Joi.string().required().min(2).max(200),
    password: Joi.string().required().min(6).max(30),
    email: Joi.string().email().required(),
});



module.exports = {
    userValidation,
    loginValidation,
    registerValidation
}

