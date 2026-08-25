//Primitive types

let name:string ='Vishnu';
let age: number=35;
let pi:number=3.14;
let distance_to_moon: number =39890890809890;

let isActive: boolean =false;
let nothing: null = null;
let notDefined: undefined= undefined;


//arrays
let numbers: number[]=[1,2,3];
let names: Array<string> = ["Jhon", "Jane"];

//Any (avoid when possible)
let anything: any ="hello";

//unknown (safer than any)
let unknown: unknown="hello";

let message: string="Hello";
let count: number=42;

console.log("Mesage", message);
console.log("Count", count);
console.log("Is Active", isActive);