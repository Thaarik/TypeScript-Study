"use strict";
class TakePhoto {
    //It is the responsibility of the class that can extend from it. check line number 15. 
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 99;
    }
}
// const dave1 = new TakePhoto("test","test ")
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia!");
    }
}
const dave1 = new Instagram("test", "test", 3);
dave1.getReelTime(); //functionable
//abstract classes cannot create objects on their own but they help to define the class who are inheriting them
//get a better structure of the class . You can use abstract method as well. 
