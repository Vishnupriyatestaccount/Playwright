class person{
    #child1;
    #child2;
    constructor(name,age,child1,child2){
        this.name=name;
        this.age=age;
        this.#child1=child1;
        this.#child2=child2;
    }

    get child1(){
        return this.#child1;
    }
    get child2(){
        return this.#child2;
    }   

    setchild1(child1){
        this.#child1=changed_name;
    }
}

let p=new Person("Vishnu",30,"child1","child2");
console.log(p.name);
console.log(p.getchild1());