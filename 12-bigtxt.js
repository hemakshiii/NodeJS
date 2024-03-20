const {writeFileSync} = require('fs')
for(i=0;i<10000;i++){
    writeFileSync('./Example/big.txt',`hello world ${i}\n`,{flag:'a'})
}