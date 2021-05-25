/*import express from 'express';
import data from './data';*/
const express=require('express');
const data =require('./data');

const app=express();


const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Server is Ready');
}) 
app.get('/api/products',(req,res)=>{
    res.send(data);
}) 
app.get('/api/shirts',(req,res)=>{
    res.send(data.shirts);
}) 
app.get('/api/products/shoes',(req,res)=>{
    res.send(data.shoes);
})  
app.get('/api/products/shirts',(req,res)=>{
    res.send(data.shirts);
}) 
app.get('/api/shoes',(req,res)=>{
    res.send(data.shoes);
}) 
app.get(`/api/shirts/:id`,(req,res)=>{
    const shirt = data.shirts.find( (x)=> x._id === req.params.id);
    if(shirt){
        res.send(shirt);
    }
    else{
        res.status(404).send({message: 'Product not found!'});
    }
}); 
app.get('/api/shoes/:id',(req,res)=>{
    const shoe = data.shoes.find( (x) => x._id === req.params.id);
    if(shoe){
        res.send(shoe);
    }
    else{
        req.status(404).send({message: 'Product not found!'});
    }
});

if(process.env.NODE_ENV = "production"){
    app.use(express.static('../frontend/build'));
}

app.listen(PORT,()=>{console.log(`Server started at http://localhost:${PORT}`)})