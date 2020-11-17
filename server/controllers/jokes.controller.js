// 3)
//here we modify our data, this is where our logic happens
const { db } = require("../models/jokes.model");
const Joke = require("../models/jokes.model"); //name of the file, ASK WHAT .. AND SINGLE . MEANS

module.exports.findAllJokes = (req, res) => { //can name findAllJokes anyhing
    Joke.find() //Joke is the collection name that is why we use it
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneJoke = (req, res) => { //can name findAllJokes anyhing
    Joke.findOne({_id: req.params.id}) //the id is passed along the url, and we access it by request.params.id, parameters of the url
        .then(OneJoke => res.json({joke: OneJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.CreateNewJoke = (req, res) => { //can name findAllJokes anyhing
    Joke.create(req.body) //request body helps us make a new joke
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.DeleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id}) //we are passing in params.id through the url
        .then(deletedJoke => res.json({joke: deletedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}