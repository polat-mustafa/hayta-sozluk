const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        autopopulate: { maxDepth: 1 }
    }]
    
});

categorySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Category', categorySchema);