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
  test("gives us back 201, with a message, and some data", async function () {
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

describe("POST /api/posts", function () {
  test("gives us back 500, with an error message", async function () {
    const response = await request(app).post("/api/posts").send({});
    const exptected = {
      "Error message": "Input fields are missing.",
    };
    expect(response.body).toMatchObject(exptected);
    expect(response.statusCode).toBe(500);
  });
});

describe("GET /api/posts/:id", function () {
  test("gives us back 200, with a message", async function () {
    const auth_id = "auth0|6218c0cbeae91f006a0ab102";
    const response = await request(app).get(`/api/posts/${auth_id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toStrictEqual("success");
    expect(response.body.message).toStrictEqual("All user's posts");
  });
});

describe("DELETE /api/posts/:id", function () {
  test("gives us back 200, with a message", async function () {
    const actual = {
      post_id: 129,
      user_id: 9,
      title: "Cucumber",
      quantity: "100g",
      description: "Nice",
      location: "London",
      price: "10.99",
      date: "10/10/2020",
    };

    const response = await request(app).delete(`/api/posts/${actual.post_id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.message).toBe("Post deleted");
    expect(response.body.payload[0]).toMatchObject(actual);
  });
});

// Users Route

describe("GET /api/users", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      status: "success",
      message: "Read all users",
    };
    const response = await request(app).get("/api/users");
    expect(response.body.status).toStrictEqual(expectedBody.status);
    expect(response.body.message).toStrictEqual(expectedBody.message);
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /api/users", function () {
  test("gives us back 200, wtih a message, and some data", async function () {
    const expectedBody = {
      status: "success",
      message: "Read user",
      payload: [
        {
          user_id: 9,
          auth_id: "auth0|6218c0cbeae91f006a0ab102",
          first_name: "mark",
          last_name: "j",
          phone_number: "1235",
          email: "test1@gmail.com",
          user_created: "7/3/2022",
        },
      ],
    };
    const auth_id = "auth0|6218c0cbeae91f006a0ab102";
    const response = await request(app).get(`/api/users/${auth_id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(expectedBody.message);
    expect(response.body.status).toBe(expectedBody.status);
    expect(response.body.payload[0]).toMatchObject(expectedBody.payload[0]);
  });
});

describe("POST /api/users", function () {
  test("gives us back 201, with a message, and some data", async function () {
    const newUser = {
      auth_id: "auth0|6218c0cbeae91f006a0ab555",
      first_name: "Test first",
      last_name: "Test last",
      phone_number: "123456",
      email: "testing1234@metest.com",
      user_created: "2/3/2022",
    };
    const response = await request(app).post("/api/users").send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.message).toBe("New user created");
    expect(response.body.payload[0]).toMatchObject(newUser);
  });
});

describe("POST /api/users", function () {
  test("gives us back 400, with an error message", async function () {
    const response = await request(app).post("/api/users").send({});
    const exptected = {
      "Error message": "Fields are missing.",
    };
    expect(response.statusCode).toBe(500);
    expect(response.body).toMatchObject(exptected);
  });
});
