class car{
    #engine;
    name;
    constructor(name,engine){   
        this.name=name;
        this.#engine=engine;
    }

    getengine(){
        return this.#engine;
    }   
    setengine(engine){
        this.#engine=engine;
    }
}

let tesla=new car("Tesla","Electric");
console.log(tesla.name);
console.log(tesla.getengine());
tesla.setengine("Electric V2");
console.log(tesla.getengine());