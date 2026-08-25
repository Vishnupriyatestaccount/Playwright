// let p= new Promise(function (resolve,reject)
// {
//     resolve(42);
// });
// p.then(function(value){
//     console.log("Answer:", value);
// });

// let p= new Promise(function(resolve,reject)
// {
//     reject("Something Broke");
// });
// p.catch(function(err)
// {
//     console.log("Caught:",err);
// });

// let p=Promise.resolve(5);
// p.then(function(val){
//     return val*10;
// }).then(function (val) {
//     console.log("Results:", val);
// });

// Promise.resolve(1)
// .then (function(val){
// console.log(val);
// return val+1;
// })
// .then(function(val)
// {
//     console.log(val);
//     return val+1;
// })
// .then(function(val)
// {
//     console.log(val);
//     return val+1;
// })

// Promise.resolve("Start")
// .then(function(val)
// {
//     console.log(val)
//     throw new Error("Broke at setp 2")
// })
// .then(function()
// {
//     console.log("This will not run")
// })
// .catch(function(err)
// {
//     console.log("Caught error", err.message);
// });

// Promise.reject("Test Failed")
// .then(function(data)
// {
//     console.log("Data:",data);
// })
// .catch(function(err)
// {
//     console.log("Error:", err);
// })
// .finally(function()
// {
//     console.log("Cleanup done")
// });


// Promise.resolve("Quick win")
// .then(function(msg)
// {
//     console.log(msg);
// })

// Promise.resolve("Quick Loss")
// .then(function(msg)
// {
//     console.log(msg);
// })

// let t1= Promise.resolve("Login:Pass");
// let t2=Promise.reject("Search:Pass");
// let t3=Promise.resolve("Logout:Pass");

// Promise.all([t1,t2,t3]).then(function (results){
//     console.log(results);
// });

// Promise.allSettled([
//     Promise.resolve("API 200"),
//     Promise.reject("API 500"),
//     Promise.resolve("API 201")
//     ]).then (function (results){
//         results.forEach(function (r){
//             let val=r.status==="fulfilled" ? r.value :r.reason;
//             console.log(r.status+ "-> " +val);
//         });
//     });

let t1= Promise.resolve("Login:Pass");
let t2=Promise.reject("Fail");
let t3=Promise.resolve("Logout:Pass");

Promise.all([t1,t2,t3])
    .then(function (results){
    console.log("all",results)})
    .catch(function(err){
        console.log("stopped",err);
    });
