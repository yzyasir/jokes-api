// 1)
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokerdb", {
    UseNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Its works bro!!!")) //if the db doesnt exist, it'll make it for me
  .catch(err => console.log("Oh no...it didnt work, from monConfig file", err));