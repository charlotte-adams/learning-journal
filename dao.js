const sqlite3 = require("sqlite3").verbose();
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
  run(sql, params = []) {
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
  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log("Error running sql: " + sql);
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log("Error running sql: " + sql);
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = JournalDAO;
