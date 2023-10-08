const os =require('os')

// info about current user

const user = os.userInfo();
console.log(user)


// method return the system

console.log(` The System Update is ${os.uptime()} second`)

const currentOS ={
    name:os.type(),
    release: os.release(),
    totalMenu : os.totalmem(),
    freemen :os.freemem()
}

console.log(currentOS)