class Car{
    //CAB

    //constructor
    constructor(namegiven_during_obj_creation)
    {
        console.log("Constructor is called");
        this.name = namegiven_during_obj_creation;  
    }   

    //attributes
    name    

    //behaviors 
    drive()
    {
            console.log(this.name + " is driving");
    }

}
const tesla= new Car("Tesla");
console.log(tesla.name);
tesla.drive();

const i10= new Car("i10");
console.log(i10.name);
i10.drive();