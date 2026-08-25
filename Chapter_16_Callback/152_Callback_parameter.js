// function greetTester(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }       

// greetTester("Vishnupriya", function() { 
//         console.log("Welcome to the testing world!");
// });

// //callback with parameters  
//  function runTest(testName, callback) {
//     let status = "Test Passed"; 
//     console.log("Running test: " + testName);
//     callback(testName, status);
// }

// runTest("Login Test", function(testName, status) {
//     console.log("Test Name: " + testName);
//     console.log("Test Status: " + status);
// } );      

//sync call back

let bugs = ["Bug 1", "Bug 2", "Bug 3"];
bugs.forEach(function(bug,i) {
    console.log("Bug#" + (i+1) + ": " +bug);
});
console.log("Total bugs: " +bugs.length)
