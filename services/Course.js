const Mongo = require('../db');

class CourseApi {
  static get(filter) {
    return new Promise((resolve, reject) => {
      Mongo
        .courses
        .find(filter)
        .toArray((error, courses) => {
          if (error) {
            return reject(error);
          }

          return resolve(courses);
        });
    });
  }

  static async getOne(id) {
    const result = await Mongo
      .courses
      .findOne({ id });

    return result;
  }
}

module.exports = CourseApi;
