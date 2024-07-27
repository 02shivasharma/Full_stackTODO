const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:shiva%40123@cluster0.imgd5ux.mongodb.net/My_Todo");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}