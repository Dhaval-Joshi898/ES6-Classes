class Vehicle{
    wheels=4
    constructor(type){
        this.type=type
    }
    
}

class Car extends Vehicle{
    constructor(type,brand){
        super(type)
        this.brand=brand
    }

    get(){
        console.log(this.wheels)
    }
}

let obj=new Car('car','BMW')
console.log(obj.get())   //this will give 4 and also undefined because function is not returning it is just consoling 

//to avoid undefined we can do make sure the function return and not use console or if use console in function then not use the console.log() while calling the function
console.log('The below is just calling obj.get without console.log()')
obj.get()