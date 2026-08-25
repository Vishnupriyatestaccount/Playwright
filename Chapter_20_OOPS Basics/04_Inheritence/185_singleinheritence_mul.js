class baseTest{
    setup(){
        console.log("base class");
    }
}
class extendbaseclass extends baseTest{
    setup(){
        console.log("extended base class");
    }
}
let b1= new extendbaseclass();
b1.setup();
