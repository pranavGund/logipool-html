// var readline=require("readline-sync")

// console.log("Select the operation");
// var operation=String(readline.question());

// console.log("Enter the 1st value");
// var value1=Number(readline.question());

// console.log("Enter the 2nd value");
// var value2=Number(readline.question());

// switch (operation) {
//     case "+":
//         console.log(value1+value2);
//         break;
//     case "-":
//         console.log(value1-value2);
//         break;
//     case "*":
//         console.log(value1*value2);
//         break;
//     case "/":
//         console.log(value1/value2);
//         break;
//     default:
//         console.log("invalid output");
//         break;
// }



// use do while loop

// var readline=require("readline-sync")

// do
// {
//     console.log("Select the operation");
// var operation=String(readline.question());

// console.log("Enter the 1st value");
// var value1=Number(readline.question());

// console.log("Enter the 2nd value");
// var value2=Number(readline.question());

// switch (operation) {
//     case "+":
//         console.log(value1+value2);
//         break;
//     case "-":
//         console.log(value1-value2);
//         break;
//     case "*":
//         console.log(value1*value2);
//         break;
//     case "/":
//         console.log(value1/value2);
//         break;
//     default:
//         console.log("invalid output");
//         break;
// }
// console.log("do you want to continue");
// console.log("y -yes, n - no");
// var res=String(readline.question());
// }
// while(res=="y");


//use do while loop additional operation

// var readline=require("readline-sync")

// do
// {
//     console.log("Select the operation");
// var operation=String(readline.question());

// console.log("Enter the 1st value");
// var value1=Number(readline.question());

// console.log("Enter the 2nd value");
// var value2=Number(readline.question());

// switch (operation) {
//     case "+":
//         console.log("Addition of", value1,"and",value2,"is :",(value1+value2));
//         break;
//     case "-":
//         console.log("substraction o", value1,"and",value2,"is :",(value1-value2));
//         break;
//     case "*":
//         console.log("multiplication", value1,"and",value2,"is :",(value1*value2));
//         break;
//     case "/":
//         console.log("divide", value1,"and",value2,"is :",(value1/value2));
//         brea
//     default:
//         console.log("invalid output");
//         break;
// }
// console.log("do you want to continue");
// console.log("y -yes, n - no");
// var res=String(readline.question());
// }
// while(res=="y");

var readline=require("readline-sync")
do
{
console.log("Select the operation");
var a=String(readline.question());

console.log("Enter the 1st value");
var b1=Number(readline.question());

console.log("Enter the 2nd value");
var b2=Number(readline.question());

if(a=="+")
{
    console.log(b1+b2)
}
else if(a=="-")
{
    console.log(b1-b2);
}
else if(a=="*")
{
    console.log(b1*b2);
}
else if(a=="/")
{
    console.log(b1/b2);
}
else
{
    console.log("default");
}
console.log("do you want to continue");
console.log("y -yes, n - no");
var res=String(readline.question());
}
while(res=="y");
