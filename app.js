const express = require('express');
const mongoose = require('mongoose');
const app = express();

//import routes

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , auth-token");
  next();
});

//connect to db

mongoose.connect('mongodb://localhost:27017/web_project',
    { useNewUrlParser: true, useUnifiedTopology:true },
    () => {
        console.log("connected to db!")
    })
//middleware
app.use(express.json());


//route middleware

app.use('/api/user' , authRoute);
app.use('/api/posts' , postRoute);

//listen
app.listen(5000);
