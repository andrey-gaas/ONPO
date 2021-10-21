const Mongo = require('../db');

class PagesApi {
  static async getOne(name) {
    const result = await Mongo
      .pages
      .findOne({ name });
    return result;
  }
}

module.exports = PagesApi;
