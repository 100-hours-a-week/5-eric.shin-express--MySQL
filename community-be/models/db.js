const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '628310',
    database: 'community_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;
