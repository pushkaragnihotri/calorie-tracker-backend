const CalorieModel = require('../db/models').calorie;

module.exports = {
  async create(data, options = {}) {
    return CalorieModel.create(data, options);
  },

  async getOne(options) {
    return CalorieModel.findOne(options);
  },

  async getAll(options) {
    return CalorieModel.findAll(options);
  },

  async update(data, options = {}) {
    return CalorieModel.update(data, options);
  },

  async delete(options = {}) {
    return CalorieModel.delete(options);
  },

  async count(options = {}) {
    return CalorieModel.count(options);
  },

  async destroy(options = {}) {
    return CalorieModel.destroy(options);
  },

  async upsert(data, options = {}) {
    const instance = await CalorieModel.findOne(options);
    if (instance) {
      return instance.update(data, options);
    }
    return CalorieModel.create(data, options);
  },
};
