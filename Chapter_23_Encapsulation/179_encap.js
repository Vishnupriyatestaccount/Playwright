class Balance{
    #balance=0;
    deposit(amount){    
        if(amount>0){
            this.#balance+=amount;
        }
}
getBalance(){
    return this.#balance;
}
}
const account=new Balance();
account.deposit(100);
console.log(account.getBalance());
account.deposit(300);
console.log(account.getBalance());

console.log(account.#balance); // This will throw an error because #balance is private and cannot be accessed outside the class.    


