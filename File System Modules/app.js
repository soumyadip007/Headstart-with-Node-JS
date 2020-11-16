var fs= require('fs')

fs.readFile('calc.js','utf8',function(err,data){

    console.log(err)
    console.log(data)

})