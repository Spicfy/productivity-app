// creating the API

require("dotenv").config({path: __dirname + "/.env"});
const express = require('express'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
})
// authentication routes
app.post("/api/users/register", (req, res) => {

})


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
