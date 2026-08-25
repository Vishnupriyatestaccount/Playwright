async function parallelTest(){
    let [r1,r2,r3]=await Promise.all([
        apiCall("Login"),
        apiCall("Dashboard"),
        apiCall("Report")
    ]);
    console.log(r1,r2,r3);  
}

parallelTest();