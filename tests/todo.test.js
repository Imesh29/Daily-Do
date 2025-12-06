const request = require("superset");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = require("../app");
const Todo = require("../models/users");

let mongoServer;

// Setup before all tests
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Clean database after each test
afterEach(async () => {
  await Todo.deleteMany();
});

// Disconnect after all tests
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});