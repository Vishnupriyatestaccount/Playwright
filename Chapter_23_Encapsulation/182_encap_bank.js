class icici{
    #balance;
    consturctor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.#balance=balance;
    }   

    getBalance(){
        return this.#balance;
    }   

    setbalance(balance,isCashier)
    {
        if(isCashier){
            this.#balance=balance;
    }else
    {
        console.log("You are not authorized to set balance");
    }
}
}
let vishnu=new icici("Vishnu",123456,1000);
console.log(vishnu.getBalance());
vishnu.setbalance(2000,false);
console.log(vishnu.getBalance());
vishnu.setbalance(2000,true);
console.log(vishnu.getBalance());