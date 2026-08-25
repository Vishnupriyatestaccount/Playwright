class BaseClass{
    setup()
    {
        console.log("Open Browser");
    }
}

class APITest extends BaseClass{
    setup(){
        console.log("APItest Open Browser")
    }
}

let test = new APITest();
test.setup();