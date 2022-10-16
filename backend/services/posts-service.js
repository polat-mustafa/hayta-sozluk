const BaseService = require('./base-service');
const userService = require('./user-service');
const categoryService = require('./categories-service');

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

    async createPost(userId, content, categoryName) {
        const user = await userService.get(userId);
        const category = await categoryService.createCategory(categoryName);
        const post = await this.create({ content, category, user});

        await user.posts.push(post);
        await category.posts.push(post);

        await user.save();
        await category.save();
        return post;
    }


}

module.exports = new PostService(require('../models/post'));