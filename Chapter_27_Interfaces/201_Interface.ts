interface TestCase{
    id : number;
    name : string;
    status : string;
    duration : number;
}

let test1:TestCase ={
    id : 1,
    name : "Vishnu",
        status : "PASS",
    duration : 1500
}

console.log("TC", test1.id + test1.name);