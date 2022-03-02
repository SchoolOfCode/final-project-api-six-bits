import query from "../../connection.js";

const response = await query(
  `CREATE TABLE IF NOT EXISTS posts (post_id SERIAL PRIMARY KEY, user_id INTEGER, title TEXT, description TEXT, location TEXT, free BOOLEAN, price NUMERIC, date TEXT, FOREIGN KEY (user_id) REFERENCES users(user_id));`
);

console.log(response);
