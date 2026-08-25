class BasePage{
    constructor(PageName)
    {
        this.PageName=PageName
    }

    open(){
        console.log("opending page");
    }
    close()
    {
        console.log("closing page")
    }
}
class Login extends BasePage{

}

const Page= new LoginPage();
page.open();
page.close();

