class user{
    constructor(name){
        this.name=name;
}
userdetail(){
    console.log("User name is: "+this.name);
}
}
let u1=new user("Vishnu");
let u2=new user("Ravi");
u1.userdetail();    
u2.userdetail();