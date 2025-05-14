// creating the API

require("dotenv").config();
const express = require('express'); 
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();



const userRoutes = require('./routes/userRoute')
app.use(express.json());
app.use('/api/users', userRoutes)
const PORT = process.env.PORT || 3000;








// authentication routes



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

function authenticateToken(req, res, next){
    //req is the request object, res is the response object, next is a function that will call the next middleware
    //the req for this route will have the token in the header
    //the token will be in the format of Bearer TOKEN
    const authHeader = req.headers['authorization'] // authHeader is in the format of Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1]  //if we have a authHeader then we split it by space and take the second part which is the token
    //if we dont have a token then we return a 401 error
   
   if(token == null) return res.sendStatus(401)
   
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
        if(err) return res.sendStatus(403) //if the token is not valid then we return a 403 error
        req.user = user //if the token is valid then we set the user in the request object
        next() //call the next middleware

        
    })

 
}