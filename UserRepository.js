class userRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      username TEXT, 
      email TEXT,
      password TEXT)`;
    return this.dao.run(sql);
  }
  create(username, email, password) {
    return this.dao.run(
      `INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)`,
      [username, email, password]
    );
  }
<<<<<<< HEAD
  update(username) {
    const { id, username, email, password } = username;
=======
  update(users) {
    return this.dao.run(
      `UPDATE users SET username = ?,
      email = ?,
      password = ? 
      WHERE id = ?`,
      [username, email, password, id]
    );
  }
  delete(id) {
    return this.dao.run(`DELETE FROM users WHERE id = ?`, [id]);
  }
<<<<<<< HEAD
  getById(id) {
    return this.dao.get(`SELECT * FROM users WHERE id = ?`, [id]);
  }
  getAll() {
    return this.dao.all(`SELECT * FROM username`);
  }
=======
>>>>>>> 1a1baff70dd27b717cdcaa27df64e9f04fdb86c6
}
