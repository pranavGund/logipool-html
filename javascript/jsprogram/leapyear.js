// var readline=require("readline-sync")
// var i=Number(readline.question())
// count=0;
let i=0;
let count=0
for(let i=2000;i<3000;i++)
{
if(i%4==0 && (i%400==0 || i%100 !=0))
{
    // console.log("it is leap year");
    // console.log(i);
    count++;
}
// else{
//     // console.log("it is not ");
// }
}console.log(count)