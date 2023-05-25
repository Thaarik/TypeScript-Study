// //Union is used when you are not sure what type of datatype it will return.
// //So instead of using any, you can use this

// let score: number | string  = 33 // This is called union. always make it strict i.e., less datatypes in union

// score =44 //correct
// score ='44' //correct
// // score = false // error

// type User = {
//     name: string;
//     id:number
// }

// type Admin = {
//     username: string;
//     id:number
// }

// let dave: User | Admin = {name:"dave",id:456}
// dave = {username:"eeee",id:456} //can update too in admin 

// function getDbId(id:number | string){
//     //making some API calls
//     if (typeof id === "string"){
//         console.log(`DB id is : ${{id}}`);
//     }
   
// }

// getDbId(3)
// getDbId("3")


// //array
// const data1: number[]=[1,2,3]
// const data2: string[]=["1","2","3"]
// const data3: (string | number | boolean)[]= ["1","2",3, true]

// let seatAllotment : 'aisle' | 'middle' | "window"
// seatAllotment = "aisle"
// seatAllotment = "window"