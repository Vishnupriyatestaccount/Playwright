let unknown: unknown ="hello";

if( type of unknown == "String"){
    console.log("Hi");
}

let message: string="Hello";

let username: String;
let UserId: number;

//function annotation
function greet(name: string): string{
    return `Hello, ${name}!`;
}