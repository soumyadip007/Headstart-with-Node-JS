const express= require('express')

const app= express()

app.listen(9000, function(req,response){
    console.log('Running')
})

app.get('/', function(req,res){
    console.log("Hello World")
    res.send('Hello World')
})


app.get('/println', function(req,res){
    res.send('Welcome to Println')
})


app.get('/data/:id', function(req,res){
   const id=req.params.id
   if(id==10)
        res.send("Soumya")
    else   
        res.send("Dip")
})


app.get('/data', function(req,res){
    const id=req.query.id
    if(id==10)
         res.send("Param-Soumya")
     else   
         res.send("Param-Dip")
 })