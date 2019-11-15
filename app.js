const express = require('express');
const mongoose = require('mongoose');
const app = express();

//import routes

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');





//connect to db

mongoose.connect('mongodb+srv://dipto007:123456hey@cluster0-36cns.mongodb.net/web_project?retryWrites=true&w=majority',
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
app.listen(3000);