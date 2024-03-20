//FS module

const {readFileSync, writeFileSync}=require('fs')

const first=readFileSync('./Example/first.txt','utf-8')
const second=readFileSync('./Example/second.txt','utf-8')

// console.log(first, second)

writeFileSync(
    './Example/result.txt',
    `Here is the result ${first} and ${second}`,
    {flag:'a'}
)
