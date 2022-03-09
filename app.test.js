import request from "supertest";
import app from "./app.js";

// Posts Route

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

describe("POST /api/posts", function () {
  test("gives us back 201, with a a message", async function () {
    const testingPost = {
      auth_id: "auth0|6218c0cbeae91f006a0ab102",
      title: "Cucumber",
      quantity: "100g",
      description: "Nice",
      location: "London",
      price: "10.99",
      date: "10/10/2020",
    };
    const response = await request(app).post("/api/posts").send(testingPost);
    const exptected = {
      title: "Cucumber",
      quantity: "100g",
      description: "Nice",
      location: "London",
      price: "10.99",
      date: "10/10/2020",
    };
    expect(response.body.payload[0]).toMatchObject(exptected);
    expect(response.statusCode).toBe(201);
  });
});

// Users Route

// describe("GET /api/users", function () {
//   test("gives us back 200, with a message", async function () {
//     const expectedBody = {
//       status: "success",
//       message: "Read all users",
//     };
//     const actual = await request(app).get("/api/users");
//     expect(actual.body.status).toStrictEqual(expectedBody.status);
//     expect(actual.body.message).toStrictEqual(expectedBody.message);
//     expect(actual.statusCode).toBe(200);
//   });
// });

// describe("POST /api/users", function () {
//   test("gives us back 201", async function () {
//     const response = await request(app).post("/api/users").send({
//       first_name: "John",
//       last_name: "Doe",
//       phone_number: "111111",
//       email: "john@doe.com",
//       user_created: "2/3/2022",
//     });
//     expect(response.statusCode).toBe(201);
//   });
// });
