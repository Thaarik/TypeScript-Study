function addTwo(num: number):number{
    return num+2
    // return "hehehe" -> gives error because if you check in line number 1, it returns a number! 
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid: boolean = false)=>{} //default argument

addTwo(5)
getUpper('Hello')
signUpUser("Hello","abc@gmail.com",false)
loginUser("hhh","abcd@gmail.com")


function getValue(myVal:number){ // In this case we cannot give return type as boolean or string
    if (myVal > 5){
        return true
    }
    return "200 ok!"
}

const getHello = (s: string):string =>{
    return "Hello"
}

const heros = ["thor","spiderman","ironman"]
heros.map((hero:string):string =>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string):void{ //void -> doesnot return anything
    console.log(errmsg);
}

function handleError(errmsg: string):never{ //void -> never returns anything and never observes
    throw new Error(errmsg)
}

export{}