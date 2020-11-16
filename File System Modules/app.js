var fs= require('fs')

fs.readFile('calc.js','utf8',function(err,data){

    console.log(err)
    console.log(data)

})

fs.writeFile('calc1.js','console.log("Done")',function(err){
    console.log(err)
})


// fs.unlink('calc1.js',function(err){
//     console.log(err)
// })