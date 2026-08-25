class BasePage{
    constructor(name){
        this.name=name;
    }

    open()
    {
        console.log("[OPEN]"+this.name);
    }
}

class AuthPage extends BasePage{
    login(user){
        console.log("[LOGIN]" +user);
    }
}

class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }
    managerUser(){
        console.log("[ADMIN] Managing users")
    }
}
let admin= new AdminPage();
admin.open();
admin.managerUser();
admin.login("superuser");
