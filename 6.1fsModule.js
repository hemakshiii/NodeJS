//Fs module Async

const{readFile, writeFile}=require('fs')

readFile('./Example/first.txt','utf-8',(err, result)=>{
if(err)
{
    console.log(err);
    return;
}
const first = result;
readFile('./Example/second.txt','utf-8',(err, result)=>{
    if(err)
{
    console.log(err);
    return;
}
const second=result

writeFile('./Example/resultasync.txt'
`Here is the result ${first} and ${second}`,
(err,result)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log(result);
}
)
})
})