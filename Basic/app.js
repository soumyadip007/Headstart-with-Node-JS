// var a=7
// var b=2

// var c=a+b

// console.log("Hello World :) ")

var http=require('http')

http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type':'text/html'})
	res.write("Welcome to Println:) ")
	res.end()

}).listen(8080)
