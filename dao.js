const sqlite3 = require("sqlite3");
const Promise = require("bluebird");

class JournalDAO {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, err => {
      if (err) {
        console.log("could not find database", err);
      } else {
        console.log("connected to database");
      }
    });
  }
  run(sqlCommand, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sqlCommand, params, function(err) {
        if (err) {
          console.log("error running sql " + sqlCommand);
          console.log(err);
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
}
module.exports = JournalDAO;
