//Modules
//So in thi chapter i.e 3 all 3.1, ...,3.5 defines how we can export and import
//in different ways so the chap is itself its own sub 


//Method1
const{mahesh,vaidehi}=require('./3.1-names')
const sayHello=require('./3.2-utils')

sayHello("Hemakshi")
sayHello(mahesh)
sayHello(vaidehi)


//Method2
//Alternative syntax
const data=require('./3.4-alt')
console.log(data)

//Method3 Mind grenade
require('./3.5-mind-grenade')



//else
//// const names=require('./3.1-names')
//sayHello(names.mahesh)
// sayHello(names.vaidehi)

//Alternative syntax 4
