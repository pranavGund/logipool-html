var readline=require("readline-sync")


function Add(v1,v2) 
{
    return v1+v2;   
}
function Sub(v1,v2)
{
    return v1-v2;
}
function Multi(v1,v2)
{
    return v1*v2;
}
function Div(v1,v2)
{
    return v1/v2;
}

console.log("select the operation")
var operation=String(readline.question())

console.log("enter first value ")
var value1=Number(readline.question())

console.log("enter second value")
var value2=Number(readline.question())

switch (operation)
 {
    case "+":
        console.log(Add(value1,value2))
        break;

    case "-":
        console.log(Sub(value1,value2))
        break;

    case "*":
        console.log(Multi(value1,value2))
        break;

    case "/":
        console.log(Div(value1,value2))
        break;
    
    default:
        console.log("invalid optput");
        break;
}