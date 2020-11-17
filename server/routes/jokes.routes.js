// 4)
//when we call on the url it will take us to the controller and modify the data
const JokesController = require("../controllers/jokes.controller"); //DOUBLE DOT MEANING?
const Joke = require("../models/jokes.model");

module.exports = app => { //app shows what kind of req we are doing and what we are doing with that req
    app.get("/api/jokes/", JokesController.findAllJokes); //so we call on the const above, and then activated the method
    app.get("/api/joke/:id", JokesController.findOneJoke);
    app.post("/api/joke/new", JokesController.CreateNewJoke);
    app.put("/api/joke/update/:id", JokesController.updateExistingJoke)
    app.delete("/api/joke/delete/:id", JokesController.DeleteJoke);
}