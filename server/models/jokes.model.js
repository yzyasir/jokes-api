// 2)
const mongoose = require("mongoose");
// here we make our models

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});
// here we set up what we are expecting to put into our project db

const Joke = mongoose.model("Joke", JokeSchema); //pulled JokeSchema from above

module.exports = Joke; //we now export it so other files can use it