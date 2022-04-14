
const express= require('express');
const app=express();
const mongoose=require('mongoose')
const urls=require('./mongooseurl')
require('dotenv').config()
var cors= require('cors')
var bodyperser= require('body-parser')
app.use(cors());
app.use(bodyperser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(bodyperser.json())
const PORT=process.env.PORT || 444;
 const routes=require('./mpesaroutes/routers')


app.use(express.urlencoded({extended: true}))
 app.use(routes);


if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build','index.html'));
    })
}
const server=app.listen(PORT, ()=>{
    var port=server.address().port;
    var host =server.address().address;
    
    console.log("Server listening at port:",host,port )
    });