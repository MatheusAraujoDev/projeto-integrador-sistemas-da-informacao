const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../cupcakes.db'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS cupcakes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flavor TEXT,
    description TEXT,
    price REAL
  )`);

  db.get("SELECT COUNT(*) AS count FROM cupcakes", (err, row) => {
    if (row.count === 0) {
      db.run("INSERT INTO cupcakes (flavor, description, price) VALUES ('Red Velvet', 'Classic with cream cheese frosting', 4.50)");
      db.run("INSERT INTO cupcakes (flavor, description, price) VALUES ('Dark Chocolate', 'Rich ganache center', 5.00)");
      db.run("INSERT INTO cupcakes (flavor, description, price) VALUES ('Vanilla Bean', 'Madagascar vanilla and buttercream', 4.00)");
    }
  });
});

const getAllCupcakes = (callback) => {
  db.all("SELECT * FROM cupcakes", [], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = { getAllCupcakes };
