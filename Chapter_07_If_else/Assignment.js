// Question#1 odd or even number
let a=9;
if(a%2===0){
    console.log("Even Number");
}else{
        console.log("Odd Number");
}

//Question#2 Student Grade calculator
let Mark=100;
if(Mark>90)
{
    console.log("A Grade");
}
else if(Mark>80 && Mark<=89)
{
    console.log("B Grade");
}
else if(Mark>70 && Mark<=79)
{   
console.log("C Grade");
}
else if(Mark>60 && Mark<=69)
{   
console.log("D Grade");
}
else if(Mark<60)
{
    console.log("Fail");
}

//Question#3 Leap Year Check

let year=2024;
if(year%4===0 && year%100!==0 || year%400===0)
{   
    console.log("Leap Year");
}
else
{
    console.log("Not a Leap Year");
}   