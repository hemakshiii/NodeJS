// const {readFile}=require("fs")
// console.log("First task is been started")

// readFile('./Example/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log("First task is been completed")
// })
// console.log("Next task is starting")

//Another eg
const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World!')
})

server.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})