import request from "supertest";
import app from "./app.js";

// Test Get (Post)

describe("GET /api/posts", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      status: "success",
      message: "Read all posts",
    };
    const actual = await request(app).get("/api/posts");
    expect(actual.body.status).toStrictEqual(expectedBody.status);
    expect(actual.body.message).toStrictEqual(expectedBody.message);
    expect(actual.statusCode).toBe(200);
  });
});

// Test Post(Post)

describe("POST /api/posts", function () {
  test("gives us back 201", async function () {
    const response = await request(app).post("/api/posts").send({
      user_id: 1,
      title: "Cucumber",
      description: "Nice",
      location: "London",
      free: false,
      price: 10.99,
      date: "10/10/2020",
    });
    expect(response.statusCode).toBe(201);
  });
});

// Test Get All Users (user)
describe("GET /api/users", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      status: "success",
      message: "Read all users",
    };
    const actual = await request(app).get("/api/users");
    expect(actual.body.status).toStrictEqual(expectedBody.status);
    expect(actual.body.message).toStrictEqual(expectedBody.message);
    expect(actual.statusCode).toBe(200);
  });
});

// Test Users Post User

describe("POST /api/users", function () {
  test("gives us back 201", async function () {
    const response = await request(app).post("/api/users").send({
      first_name: "John",
      last_name: "Doe",
      phone_number: "111111",
      email: "john@doe.com",
      user_created: "2/3/2022",
    });
    expect(response.statusCode).toBe(201);
  });
});
