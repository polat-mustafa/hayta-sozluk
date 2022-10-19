const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: { type: Date, default: Date.now() },
    avatar: { type: String, default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        autopopulate: { maxDepth: 1 },
    }]
});

userSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('User', userSchema);