let firstname='vvishhnuu';
let fullname=`Hi ${firstname}, welcome to JavaScript!`;

console.log(fullname);

let env='staging';
const userid=1
const apiurl=`https://${env}.api.com/user/${userid}`;

console.log(apiurl);

//playwright
const rowIndex=3
const columnname='email'
await page.locator(`[datarow="${rowIndex}"] [data-column="${columnname}"]`).click();

