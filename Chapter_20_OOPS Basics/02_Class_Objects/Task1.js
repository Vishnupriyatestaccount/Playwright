class calculator{
    a;
    b;
    constructor(a,b){
        this.a=a;
        this.b=b;
    }


addition(){
    return this.a+this.b;
}
subtraction(){
    return this.a-this.b;
}   
multiplication(){
    return this.a*this.b;
}
division(){
    return this.a/this.b;
}   
}


console.log("Addition of 10 and 5 is: "+new calculator(10,5).addition());
console.log("Subtraction of 10 and 5 is: "+new calculator(10,5).subtraction());
console.log("Multiplication of 10 and 5 is: "+new calculator(10,5).multiplication());
console.log("Division of 10 and 5 is: "+new calculator(10,5).division());
