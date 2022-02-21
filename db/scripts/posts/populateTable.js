import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO posts (title, full_name, description, location, phone_number, email, free, price, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
  ["Potatoes", "Mario K", "Very good to eat", "France", "01111234", "mario@me.com", true, 20, "01/01/2022"]
);

console.log(response);

db.end();
