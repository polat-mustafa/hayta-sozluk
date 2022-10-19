const BaseService = require('./base-service');

class UserService extends BaseService {

    async getPage(page) {
        const users = await this.getAll();
        const sortByDatesLatest = users.sort((a, b) => b.date - a.date);
        const getPageLimitUsers = sortByDatesLatest.slice((0), page);
        return getPageLimitUsers;

    }
    

    async findByEmail(email) {
        return this.model.findOne({ email: email });
    }

    async findByUsername(username) {
        return this.model.findOne({ username: username });
    }

    async findByUsernameOrEmail(usernameOrEmail) {
        return this.model.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
    }
}

module.exports = new UserService(require('../models/user'));
