class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name+"is eating");
    }
    sleep(){
        console.log(this.name+"is sleeping");
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    barking(){
        console.log(this.name+","+"is barking");
    }
}

let dog1= new Dog("rambo","lab");
let dog2= new Dog("pappulu","pug")
dog1.eat();
dog2.sleep();
dog1.barking();
