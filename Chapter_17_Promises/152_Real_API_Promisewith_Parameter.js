let apiCall = new Promise(function (resolve,reject) {
   reject("error")
});
apiCall.then(function(data){
    console.log("sucess or reject");
    }).catch(function(error)
{
    console.log(error);
})
