import query from "../../connection.js";

const response = await query(
  `CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, auth_id TEXT, first_name TEXT, last_name TEXT, phone_number TEXT, email TEXT, user_created TEXT);`
);

console.log(response);
