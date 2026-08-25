let testresults =["Pass","Fail","Pass","Pass","Skip"];
testresults.forEach((result,index) => {
    console.log("Test" + (index+1) + " => " + result);
});