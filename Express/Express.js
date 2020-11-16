const express= require('express')

const app= express()

app.listen(9000, function(req,response){
    console.log('Running')
})

app.get('/', function(req,res){

    console.log("Hello World")

})