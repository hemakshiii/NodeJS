//Streams
const {createReadStream}=require('fs')

const stream = createReadStream('./Example/big.txt',{highWaterMark:90000, encoding:'utf-8'})

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('data',(err)=>{
    console.log(err)
})