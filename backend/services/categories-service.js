const BaseService = require('./base-service');

class CategoryService extends BaseService {
    constructor(model) {
        super(model);
    }


    async findByCategoryName(categoryName) {
        return this.model.findOne({ categoryName: categoryName });
    }

    async createCategory(categoryName) {
        return this.model.create({ name: categoryName });

    }

    async findBySameCategory(categoryName) {
        const category = await this.findByCategoryName(categoryName);
        return this.model.find({ category: category._id });
    }
}

module.exports = new CategoryService(require('../models/category'));
