const User = {
    name: "Dave",
    email: "dave@abc.com",
    isActive: true
}

// function createUser({name: string,isPaid: boolean}){} //with arguments


// // createUser({name: "aaa",isPaid: false, email:'abab@ab.com'}) // this will create an error because in createUser function, only name and ispaid arguments are passed!

// let userDetails = {name: "aaa",isPaid: false, email:'abab@ab.com'}

// createUser(userDetails) // But when pass those arguments in the form of variable declared above, it does not raise any error
// //This is the odd behaviour of objects in TS


// function createCourse():{name: string,price: number}{ //with return types (no arguments passed in this case.)
//     return {name:"reactjs",price:499}
// }


// type User = { //This is called type aliases.
//     name: string;
//     email:string;
//     isActive: boolean
// }//Create new types like this. It creates 'User type containing following parameters.


// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})


type User = {
    readonly _id: string //this 'readonly' doesnot allow you to change/write the value of that parameter in later cases
    name:string
    email:string
    isActive: boolean,
    creditcarddetails?: number // this '?' makes this parameter optional
}

let myUser: User = {
    _id: "1234",
    name: "dave",
    email: "dave@abc.com",
    isActive: false
}

type cardNumber ={
    cardnumber : string
}
type carddate ={
    carddate: string
}
type carddetails = cardNumber & carddate &{ //mix and matches the above two types
    cvv: number
}

myUser.email = "abc@gmail.com"
// myUser._id = "ada" // you cannot change _id because we gave readonly usecase for _id

export{}