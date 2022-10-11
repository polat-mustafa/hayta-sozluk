const BaseService = require('./base-service');

class UserService extends BaseService {

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
