function sayhello(msg:string): void{
    console.log(msg);
}

function greet(name: string): string{
    return `Hello,${name}`;
}

function throwerror(message: string):never{
    throw new Error(message);
}

function infiniteloop(): never{
    while(true) {}
}