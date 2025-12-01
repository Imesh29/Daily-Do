const mongoose = require("mongoose");

const userSchenma = new mongoose.Schema({
    task: { type: String, required: true, minlength:5},
    tags: {type: String,enum: ["NodeJS", "Javascript", "CSS", "REACT"]},
    status: {type: String, required: "true", minlength: 3},
});

const User = mongoose.model("User",userSchenma);

module.exports = user;