// function Vehicle(name,color,wheels){
//     this.name=name;
//     this.color=color;
//     this.wheels=wheels;

//     this.getDetails=function(){
//         console.log(`The Vehicle is ${this.name} and color is ${this.color} ,it has ${this.wheels} wheels.`)
//     }
// }

// let vehicle1=new Vehicle('BMW','Red',4) //new keyword is for creating objects
// console.log(vehicle1)   //this will return objects with getdetails function also inside it
// //op of above console Vehicle {name: 'BMW', color: 'Red', wheels: 4, getDetails: ƒ}

// vehicle1.getDetails() 

// //Classes in JS
// class VehicleCl{
//     // contains

//     //1.properties
//     name;
//     color;
//     wheels;
//     //2.Constructor
//     constructor(name,color,wheels){
//         this.name=name;
//         this.color=color;
//         this.wheels=wheels;
//     }

//     //3.Methods this method came outside so that it is accesible to every object but every object does not contain this function
//     getDetails(){
//         console.log(`The Vehicle is ${this.name} and color is ${this.color} ,it has ${this.wheels} wheels.`)
//     }
// }

// const veh1=new VehicleCl('Bike','blue',2)
// console.log(veh1)
// //OP:VehicleCl { name: 'Bike', color: 'blue', wheels: 2 }
// veh1.getDetails()



// This will give UNDEFINED 
class Student{
    name;
    sec;
    #rollno;   // This is a private field
    constructor(name,sec,rollno){
        this.name=name;
        this.sec=sec;
        this.#rollno=rollno;  // Assigning the private field
        
    }
}
let stu=new Student('dj','b','14')
console.log(stu.rollno) // This will result in an error because rollno is a private field


//to access the roll no ,you would need to define a method within the class that returns its value or manipulates it
class Student1{
    name;
    sec;
    #rollno;   // This is a private field
    constructor(name,sec,rollno){
        this.name=name;
        this.sec=sec;
        this.#rollno=rollno;  // Assigning the private field
        
    }
    getDetails() {
        return`${this.#rollno} from the function inside class`
    }
}
let stud=new Student1('dj','b','14')
console.log(stud.getDetails()) // This will result in an error because rollno is a private field