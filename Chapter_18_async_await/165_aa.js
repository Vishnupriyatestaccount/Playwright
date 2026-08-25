//when setp 2 depends on step1, you must run requentially

// 

async function seq(){
    console.log("Starting the test")
    let start=Date.now();

    let r1=await apiCall("Login");
    console.log(r1);
    
    let r2=await apiCall("Dashboard");
    console.log(r2);

    let r3=await apiCall("Report");
    console.log(r3);
}
seq();

