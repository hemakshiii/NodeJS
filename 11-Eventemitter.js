//Event emitter

const EventEmitter = require('events')

const customEmitter= new EventEmitter()

customEmitter.on('response',(name, age)=>{
    console.log(`Hey my name is ${name} and my age is ${age}`)
})
customEmitter.on('response',()=>{
    console.log("data received")
})

customEmitter.emit('response','hemakshi',21)