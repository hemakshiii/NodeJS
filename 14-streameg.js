// var http =require('http')
// var  fs= require("fs");

// http.createServer(function (req,res) {
//     const text=fs.readFileSync('./Example/big.txt','utf-8')
//     res.end(text);
// })
// .listen(5000)

//read files in chunks
var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./Example/big.txt','utf-8')

fileStream.on('open',()=>{
    fileStream.pipe(res)
})
    fileStream.on('error',(err)=>{
        res.end(err)
    })

}) 
.listen(5000)