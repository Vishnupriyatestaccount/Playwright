

function print()
{
    console.log("I'm inside print");
    
}

function print2(item,callback)
{
    console.log("I'm inside print2",item);
    callback();
}


//first way
print2("pizza",print);

//second way
print2("burger",function()
{
    console.log("I'm inside the anonymous function");
});

//third way using arrow function    

print2("momos",()=>{
    console.log("I'm inside the arrow function");
}  );