const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_ab777',
  password: '%&4FRq8$dYTPJGE', 
  database: 'freedb_recipe_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;