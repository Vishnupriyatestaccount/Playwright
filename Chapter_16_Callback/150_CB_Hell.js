function openBrowser(callback) {
    console.log("Opening Browser");
    setTimeout(function() {
        callback();
    }, 3000);   
}

function goToLoginPage(callback) {
    setTimeout(function() {
        console.log("Navigating to Login Page");
        callback();
    }, 500);    
}

function enterCredentials(callback) {
    setTimeout(function() {
        console.log("Entering Credentials");
        callback();
    }, 1000);    
}

function clickLoginButton(callback) {
    setTimeout(function() {
        console.log("Clicking Login Button");
        callback();
    }, 500);        

}   

openBrowser(function() {
    goToLoginPage(function() {
        enterCredentials(function() {       
            clickLoginButton(function() {
                console.log("Login Successful");
                    });
               });
            });
        });