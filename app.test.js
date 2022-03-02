import request from "supertest";
import app from "./app.js";

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


// import supertest from "supertest";
// import request from "supertest";

// describe("POST /api/posts", () => {
//   test("should respond with a 201 status code", async (done) => {
//     const response = await request(app).post("/api/posts").send({
//       user_id: 123,
//       title: "Cucumber",
//       description: "Nice",
//       location: "London",
//       free: false,
//       price: 10.99,
//       date: "10/10/2020",
//     });
//     expect(response.statusCode).toBe(201);
//     done();
//   }, 5000);
// });
