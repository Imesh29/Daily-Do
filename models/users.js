const mongoose = require("mongoose");

const todoSchenma = new mongoose.Schema({
    task: { type: String, required: true, minlength:5},
    tags: {type: String,enum: ["NodeJS", "Javascript", "CSS", "REACT"]},
    status: {type: String, required: "true", minlength: 3},
});

const Todo = mongoose.model("Todo",todoSchenma);

module.exports = Todo;