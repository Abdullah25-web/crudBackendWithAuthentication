const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,

  completed: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;
