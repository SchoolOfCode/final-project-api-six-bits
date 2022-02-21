import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT, full_name TEXT, description TEXT, location TEXT, phone_number TEXT, email TEXT, free BOOLEAN NOT NULL, price NUMERIC, date TEXT);`
);

console.log(response);

db.end();
