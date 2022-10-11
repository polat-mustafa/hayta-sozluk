const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        autopopulate: { maxDepth: 1 }
    }
});

postSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Post', postSchema);