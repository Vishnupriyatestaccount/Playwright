class Credentials{
    #apiKey;  //private variable
    user;

    constructor(apiKey, user){
        this.#apiKey=apiKey;
        this.user=user;
    }


getAuthHeader()
{
    return "Bearer "+this.#apiKey;
}
}

let cred= new Credentials("1234567890","Vishnu");
console.log(cred.user);
console.log(cred.getAuthHeader());  
console.log(cred.#apiKey);  //error because apiKey is private variable