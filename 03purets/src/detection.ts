function detectType(val: number | string ){
    //return val.toLowerCase() - returns error because we are not sure what kind of type it returns.
    if(typeof val === "string"){ //typeof type guard
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id:string | null){ //provided null as a caution
    if(!id){
        console.log("Please provide ID");
        return    
    }
    id.toLowerCase()
}
//be careful with "" empty strings

interface User{
    name: string,
    email: string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){ //we are narrowing it to see if "isAdmin" is present in the account arg that has either User or Admin
        return account.isAdmin
    }
}

//typeof checks default types
//instamceof checks whether this object is instance of a class or not
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());            
    }
  }

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird){ //in this case, TS cannot determine the rety=urn type is Fish or bird. It returns Boolean
//     return (pet as Fish).swim !== undefined //if the fish has the method swim then it is a fish. otherwise it is undefined
// }

// function getFood(pet: Fish | Bird){
//     if(isFish(pet)){
//         pet //Due to the Ts undetermined return value, it cannot whether the pet parameter is Fish or bird
//         return "fish food"
//     }else{
//         pet
//         return "bird food"
//     }
// }

function isFish(pet: Fish | Bird): pet is Fish{ //in this case, if the return is True, then it returns Fish type which soolves the above confusion.
    return (pet as Fish).swim !== undefined //if the fish has the method swim then it is a fish. otherwise it is undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet // Now the parameter can say that type is fish
        return "fish food"
    }else{
        pet // Now the parameter can say that type is bird
        return "bird food"
    }
}

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle", //using this "kind" is called discriminated union
    length: number,
    breadth: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius **2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length *shape.breadth
        default:
            const _exhaustiveCheck: never = shape // giving default in switch case with never type is called Exhaustiveness checking.
            return _exhaustiveCheck
        }
    }




