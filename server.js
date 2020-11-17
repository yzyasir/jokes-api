// 1)
const express = require("express");
const app = express(); 
const port = 8000;
// ______________________________________________________________
// needs connection to mongoose to do anything, the thing below
require("./server/config/mongoose.config"); //takes everything we wrote in mongoose config and sees it if it all works
//should see the line show it works (the console.log)

app.get("/", (req,res) => {
    console.log("Hello from the front page!");
    res.json({message: "It worked"});
})
// ______________________________________________________________
app.use(express.json(), express.urlencoded({extended: true})); //this is specific to using post req, helps in dealing with post requests

const AllJokeRoutes = require("./server/routes/jokes.routes");
AllJokeRoutes(app); //here we passed it app from express
//the above code finish ups our connections
// ______________________________________________________________



app.listen(port, ()=>console.log(`Yasir is listening on port: ${port}!`));