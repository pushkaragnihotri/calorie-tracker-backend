const UserModel = require('../db/models').user;

module.exports = {
  async create(data, options = {}) {
    return UserModel.create(data, options);
  },

  async getOne(options) {
    return UserModel.findOne(options);
  },

  async getAll(options) {
    return UserModel.findAll(options);
  },

  async update(data, options = {}) {
    return UserModel.update(data, options);
  },

  async delete(options = {}) {
    return UserModel.delete(options);
  },

  async count(options = {}) {
    return UserModel.count(options);
  },

  async destroy(options = {}) {
    return UserModel.destroy(options);
  },

  async upsert(data, options = {}) {
    const instance = await UserModel.findOne(options);
    if (instance) {
      return instance.update(data, options);
    }
    return UserModel.create(data, options);
  },
};
