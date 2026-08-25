function openBrowser(){
    return new Promise(function(resolve)
    {
        resolve("Open the Browser");
    })
}

function goToLoginPage()
{
    return new Promise(function(resolve){
        resolve("Login page loaded");
    
    });
}


function erroPage()
{
    return new Promise(function(reject){
        resolve("Error Page loaded");
    
    });
}


function enterCredentials()
{
    return new Promise(function(resolve){
        resolve("credentials entered");
    
    });
}

function clickLogin()
{
    return new Promise(function(resolve){
        resolve("User Logged In");
    
    });
}
openBrowser().then(function(msg){
    console.log("Open the Browser")
    return goToLoginPage();
}).then(function(msg){
    console.log("Step2", msg);
    return enterCredentials();
}).then(function(msg){
    console.log("Step3", msg);
    return clickLogin();
}).catch(function(error){
    console.log("Error", error);
    return enterCredentials();
}).finally(function()
{
    console.log("Done execution")
});