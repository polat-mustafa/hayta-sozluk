const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        autopopulate: { maxDepth: 1 }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: { maxDepth: 1 }
    },
    date: { type: Date, default: Date.now() }
});

postSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Post', postSchema);