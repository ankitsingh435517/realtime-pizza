
require('dotenv').config()

//express server created
const express = require('express');

//express server starts
const app = express();

//port 
const PORT = process.env.PORT || 3000;

//import ejs
const ejs = require('ejs')

//import express-ejs-layouts
const expressLayouts = require('express-ejs-layouts')

//path module of nodejs
const path = require('path')

//import mongoose
const mongoose = require('mongoose')

//import express-session
const session = require('express-session')

//import express-flash
const flash = require('express-flash')


//import connect-mongoose
const MongoDbStore = require('connect-mongo')


//database connection
// 'mongodb://localhost/pizza'


mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true,
useFindAndModify: true  });
const connection = mongoose.connection;
connection.once('open',() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


//Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoDbStore.create({
        mongoUrl:process.env.MONGO_CONNECTION_URL
    }),
    saveUninitialized:false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }  //24 hrs
}))


app.use(flash())
 


//Assets
app.use(express.static('public'))
app.use(express.json())

//global middleware
app.use((req,res,next)=>{
    res.locals.session = req.session
    next()
})


//set template engine
app.use(expressLayouts)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')


require('./routes/web')(app);


//node server
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
});

