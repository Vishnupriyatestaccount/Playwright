class Bug{
    constructor(name, severity){
        this.name=name;
        this.severity=severity;
    }

    display()
    {
        console.log("severity: " + this.severity + ", Bug Name: " + this.name);
    }
}

let bug1=new Bug("Login Issue", "High");
let bug2=new Bug("UI Issue", "Medium");

bug1.display();
bug2.display();