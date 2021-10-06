const Mongo = require('../db');

class TeacherApi {
  static get(filter) {
    return new Promise((resolve, reject) => {
      Mongo
        .teachers
        .find(filter)
        .toArray((error, teachers) => {
          if (error) {
            return reject(error);
          }

          return resolve(teachers);
        });
    });
  }

  static async getOne(id) {
    const result = await Mongo
      .teachers
      .findOne({ id });

    return result;
  }
}

module.exports = TeacherApi;
