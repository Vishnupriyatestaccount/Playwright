class BasePage{
    verify(){
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage{
    verify(){
        console.log("Verify username field exists");
        console.log("Verify password field exists");
        console.log("Verify Login button exists");
    }
}

class DashboardPage extends BasePage{
    verify()
    {
      console.log("Verify welcome msg shown");
        console.log("Verify side bar exists");
        }
}

class CartPage extends BasePage{
    verify()
    {
      console.log("Cart Items are shown");
        console.log("Base price is shown");
        }
}

let Pages =  [new BasePage(), new DashboardPage(), new CartPage()];
Pages.forEach(function (Page)
{
Page.verify();
console.log("xxx");
});