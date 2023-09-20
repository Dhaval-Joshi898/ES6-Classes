function Vehicle(name,color,wheels){
    this.name=name;
    this.color=color;
    this.wheels=wheels;

    this.getDetails=function(){
        console.log(`The Vehicle is ${this.name} and color is ${this.color} which has ${wheels} wheels`)
    }
}

let vehicle1=new Vehicle('BMW','Red',4) //new keyword is for creating objects
console.log(vehicle1)   //this will return objects with getdetails function also inside it
vehicle1.getDetails() 

//Classes in JS
class VehicleCl{
    // contains
    //1.properties
    //2.Constructor
    //3.Methods
}