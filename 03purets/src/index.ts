// console.log("typescript is still here")

// class User {
//     public email:string //make sure TS is aware of email and name in string
//     //Accessible everywhere(default)
//     private name:string
//     //private makes it accessible only inside the class. private is not in JS world . It is used as '#'
//     readonly city: string ="bristol" //initializer
    
//     // city:string =""
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name = name
        
//     }
// }

// There are three Access modifiers: Private, public(default), protected

//Both up and down are same
class User {
    protected _courseCount = 1 //accessible in inherted class too but restricted outside class.
    readonly city: string ="bristol" //initializer
    constructor(public email: string, public name:string){
    }
    private deleteToken(){ //we have private method too
        console.log('Token deleted')
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){ //setter does not allow you to have any return types
        if(courseNum <=1){
            throw new Error("Cannot be more than 1")
        }
        this._courseCount=courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const dave = new User("anc@abc.com", "dave")
dave.city
// dave.deleteToken() //gives error because the method ios private


