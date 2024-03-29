const express = require('express');
const res=require('express/lib/response');
const { default: mongoose } = require('mongoose');
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

require("./conn")
require("./userSchema")
const PORT=process.env.PORT

const app=express();

app.use(express.json());
app.use(require("./auth"));
const checkURL=(req,res,next)=>
{
  console.warn('current route ',req.originalUrl)
  next();
}
app.use(checkURL);

//app.get('/',(req,res)=>{
  //  res.send('Hello from Main-page')
//});


app.get('/contactus',(req,res)=>{
    res.cookie("test",'Abdullah')
    res.send('Hello from contact page')
    
});
app.listen(PORT,()=>{
    console.log('Server is Running')
    console.log(PORT)
   
})
