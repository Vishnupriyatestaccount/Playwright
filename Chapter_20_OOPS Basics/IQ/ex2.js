class Environment{
    constructor(name="staging", port=300){
        this.name=name;
        this.port=port;
    }

    geturl()
    {
        return "http://"+this.name+":"+this.port;
    }
    }
let env1=new Environment();
let env2=new Environment("production",8080);
console.log(env1.geturl());
console.log(env2.geturl());