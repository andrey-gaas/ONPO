const Mongo = require('../db');

class ReviewApi {
  static get(filter) {
    return new Promise((resolve, reject) => {
      Mongo
        .reviews
        .find(filter)
        .toArray((error, reviews) => {
          if (error) {
            return reject(error);
          }

          return resolve(reviews);
        });
    });
  }
}

module.exports = ReviewApi;
