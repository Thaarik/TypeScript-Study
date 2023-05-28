const score: Array<number> = []
const names: Array<string>=[]

function indentityOne(val: boolean | number): boolean | number{
    return val
}

function indentityTwo(val: any):any{ //takes any type of value, returns any type of value.
    return val
}

function indentityThree<Type>(val: Type):Type{
    return val
}

function indentityFour<T>(val: T):T{ //same as identityThree
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// indentityFour<Bottle>({})
indentityTwo("3") //function identityTwo(val: any):any
indentityThree("3")//function indentityThree<"3">(val: "3"):"3". It locks the value/type. 
indentityThree(3)//function indentityThree<3>(val: 3):3. It locks the value/type. 

function getSearchProducts<T>(products:T[]):T{//Generics in Array
    //do some db operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]):T=>{ //Generics with arrow function
    //do some DB operations
    const myIndex = 4
    return products[myIndex]
}
//if you usee <T,> it is found in react tpo show that it is a generics type and not a JSX syntax.

interface DB{
    connection: string,
    username: string,
    password: string

}

function anotherFunction<T, U extends DB>(val1:T, val2:U):object{
    return {
        val1,
        val2
    }
}

// anotherFunction(3,{})
interface Quiz{
    name:string,
    type:string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellabled<T>{ //generic class
    public cart: T[]=[] //initialization

    addToCart(products: T){ //can handle any type of products you pass it on.
        this.cart.push(products)

    }
}


