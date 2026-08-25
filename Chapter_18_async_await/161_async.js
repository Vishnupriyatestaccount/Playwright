async function testapi(){
    try{
        let result=await Promise.reject("503 Failed");
    } catch (error) {
        console.error(error);
    }
    finally{
        console.log("Finally block executed");
    }   
}

testapi();