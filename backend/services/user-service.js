const BaseService = require('./base-service');
const { encryptPassword } = require('../scripts/utils/helper');
class UserService extends BaseService {

    async getPage(page) {
        const users = await this.getAll();
        const sortByDatesLatest = users.sort((a, b) => b.date - a.date);
        const getPageLimitUsers = sortByDatesLatest.slice((0), page);
        return getPageLimitUsers;

    }

    async login({ username, password }) {
        const user = await this.findByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }

        const hashedPassword = encryptPassword(password);
        if (hashedPassword !== user.password) {
            throw new Error('Invalid password');
        }

        return user;
    }

    async register (user) {
        const { username, password, email } = user;
        const hashedPassword = encryptPassword(password);
        const newUser = await this.create({ username, password: hashedPassword, email });
        return newUser;
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
