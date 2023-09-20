function Vehicle(name,color,wheels){
    this.name=name;
    this.color=color;
    this.wheels=wheels;

    this.getDetails=function(){
        console.log(`The Vehicle is ${this.name} and color is ${this.color} ,it has ${this.wheels} wheels.`)
    }
}

let vehicle1=new Vehicle('BMW','Red',4) //new keyword is for creating objects
console.log(vehicle1)   //this will return objects with getdetails function also inside it
//op of above console Vehicle {name: 'BMW', color: 'Red', wheels: 4, getDetails: ƒ}

vehicle1.getDetails() 

//Classes in JS
class VehicleCl{
    // contains

    //1.properties
    name;
    color;
    wheels;
    //2.Constructor
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
    }

    //3.Methods 
        getDetails=function(){
        console.log(`The Vehicle is ${this.name} and color is ${this.color} ,it has ${this.wheels} wheels.`)
    }
}

const veh1=new VehicleCl('Bike','blue',2)
console.log(veh1)  //OP VehicleCl {name: 'Bike', color: 'blue', wheels: 2, getDetails: ƒ}