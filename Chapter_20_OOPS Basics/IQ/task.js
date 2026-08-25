class Token{
    #value;
    constructor(val){
        this.#value=val;
    }

    gettoken()
    {
        return this.#value;
    }
    getmasked()
    {
        return '***'+ this.#value.slice(-4);
    }
}
let t=new Token("abcd1234");
console.log(t.gettoken);
console.log(t.getmasked);
console.log(t.value);