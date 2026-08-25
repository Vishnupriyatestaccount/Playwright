// // let - Block Scoped
// let a = 10;

// let retryCount = 0;
// retryCount = retryCount + 1;
// retryCount = retryCount + 1;
// console.log("Retry attempt:", retryCount);

// //let retryCount = 5;

// //let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// // ❌ SyntaxError: redeclaration not allowed

// let testStatus = "pending";

// if (testStatus === "pending") {
//     let executionTime = 1200;
//     console.log("Inside block:", executionTime);   // 1200
// }

// console.log(executionTime); // ReferenceError: executionTime is not defined

// // {} - Block 
// // if(){} 
// // funcion name(){}


// // let = loyal
// // var = varirable / triator

//var 
{
var name = "pending";
var name="updated pending";
console.log("Inside block:", name); // pending
}
//name = "done";
console.log("Outside block:", name); // done


//let function scoped
{
let name = "pending";
name="updated pending";
console.log("Inside block:", name); // pending
}
//name = "done";
console.log("Outside block:", name); // done

//const
{
const name = "pending";
// name="updated pending"; // This would cause an error
console.log("Inside block:", name); // pending
}
//name = "done";
console.log("Outside block:", name); // done
