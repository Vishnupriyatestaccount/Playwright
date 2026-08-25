let apiCall = new Promise(function (resolve,reject) {
    resolve({
        Status:200, body:"UserData"
    })

apiCall.then(function(response){
    console.log(response.status)
});
