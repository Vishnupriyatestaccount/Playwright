class Testname{
    constructor(name,status,priority){
        this.name=name;
        this.status=status;
        this.priority=priority;
    }

    display()//method
    {
        console.log("Name: "+this.name+" Status: "+this.status+" Priority: "+this.priority);
    }
}

let loginTest= new Testname("Login Test","Pass","High");
let signupTest= new Testname("Signup Test","Fail","Medium");

//function

//function f1();

loginTest.display();
signupTest.display();