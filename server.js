
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


//Assets
app.use(express.static('public'))


//set template engine
app.use(expressLayouts)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')



app.get('/',(req,res)=>{ //it takes info from below set-up of app.use,set..
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
});

