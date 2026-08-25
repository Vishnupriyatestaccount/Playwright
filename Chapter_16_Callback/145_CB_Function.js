function cafe(item,callwhentableready)
{
    console.log(("Finding table for you"));
    console.log("Your order is ready",item);
    callwhentableready(item);
}

function callwhentableready(item)
{
    console.log("calling you 9820990099");
}

cafe("pizza",callwhentableready);

cafe("burger", function(item) 
{
    console.log("calling you 0922009900");
})

cafe("momos", (item) => {
    console.log("calling you 0922009990");
})