class Counter{
    constructor(){
        this.count=0;
}

increment()
{
    this.count++;
    return this;
}

display(){
    console.log("Count:",this.count);
    return this;
}
}

new counter().increment().increment().increment().display();