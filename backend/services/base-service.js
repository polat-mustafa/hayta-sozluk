class BaseService {
    constructor(model) {
        this.model = model;
    }

    async save(entity) {
        return await this.model.insertMany(entity);
    }
    

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll() {
        return await this.model.find();
    }

    async create(entity) {
        return await this.model.create(entity);
    }
    

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }

}

module.exports = BaseService;