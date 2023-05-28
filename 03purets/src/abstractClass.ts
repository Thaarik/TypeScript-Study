abstract class TakePhoto{ //just like a blueprint. TYou can create an object from it like in line number 9.
    //It is the responsibility of the class that can extend from it. check line number 15. 
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getReelTime(): number{
        return 99
    }
}

// const dave1 = new TakePhoto("test","test ")

class Instagram extends TakePhoto{
    constructor(public cameraMode:string,
        public filter: string,
        public burst:number){
            super(cameraMode,filter)
        }
        getSepia(): void {
            console.log("Sepia!");
            
        }
}

const dave1 = new Instagram("test","test", 3)
dave1.getReelTime() //functionable

//abstract classes cannot create objects on their own but they help to define the class who are inheriting them
//get a better structure of the class . You can use abstract method as well. 