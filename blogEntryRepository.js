class blogEntryRepository {
  constructor(dao) {
    this.dao = dao;
  }
  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS blogEntry (
      id  INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      body TEXT,
      author TEXT,
      date TEXT, 
      tags TEXT,
      CONSTRAINT user_fk_id FOREIGN KEY (userId)
        REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
    return this.dao.run(sql);
  }
  create(title, body, author, date, tags, userId) {
    return this.dao.run(
      `INSERT INTO blogEntry (title, body, author, date, tags, userId)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [title, body, author, date, tags, userId]
    );
  }
  update(blogEntry) {
    const { id, title, body, author, date, tags, userId } = blogEntry;
    return this.dao.run(
      `UPDATE blogEntry,
     SET title = ?,
     body = ?,
     author = ?, 
     date = ?,
     tags = ?, 
     userId = ?
     WHERE id = ?`,
      [title, body, author, date, tags, userId, id]
    );
  }
  delete(id) {
    return this.dao.run(`DELETE FROM blogEntry WHERE id = ? `, [id]);
  }
}
