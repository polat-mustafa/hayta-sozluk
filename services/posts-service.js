const BaseService = require('./base-service');
const userService = require('./user-service');

class PostService extends BaseService {
    constructor(model) {
        super(model);
    }

    async findByAuthor(authorId) {
        return this.model.find({ author: authorId });
    }

    async findByAuthorName(authorName) {
        const user = await userService.findByUsername(authorName);
        return this.model.find({ author: user._id });
    }

    async findByAuthorNameOrEmail(authorNameOrEmail) {
        const user = await userService.findByUsernameOrEmail(authorNameOrEmail);
        return this.model.find({ author: user._id });
    }

    async findPostsByKeyword(keyword) {
        return this.model.find({ $text: { $search: keyword } });
    }

    async createPost(userId, title, content) {
        const user = await userService.get(userId);

        const post = await this.create({ title, content, user});

        user.posts.push(post);

        await user.save();

        return post;
    }


}

module.exports = new PostService(require('../models/post'));