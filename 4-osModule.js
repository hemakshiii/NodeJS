//Built Module :-

//OS model
const os=require('os')
const user=os.userInfo();
console.log(user);

console.log(`The current system time is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory:os.freemem(),

}

console.log(currentOS)