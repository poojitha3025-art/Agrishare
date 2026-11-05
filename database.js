const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./agrishare.db");

db.serialize(() => {

    db.run(`CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        farmer TEXT,
        phone TEXT,
        equipment TEXT,
        location TEXT,
        days INTEGER,
        total INTEGER,
        status TEXT
    )`);

});

module.exports = db;