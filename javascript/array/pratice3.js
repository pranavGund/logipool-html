// let str="abvcf";
// let res="";

// for(i=0;i<=str.length-1;i++)
// {
//   let char=str.charAt(i)
//   let ascii=char.charCodeAt(char)
//   if(ascii>=97 && ascii<=122)
//   {
//     ascii=ascii-32
//   }
//   res=String.fromCharCode(ascii)+res;   //reverse an uppercase
// }
// console.log(res);
var readline=require("readline-sync");
console.log("Enter your string to reverse");
var str=String(readline.question());
// let str="pranav"

let res=""

for(let i=0;i<str.length;i++)
{
    let char=str.charAt(i)
    res=char+res
}
console.log(res);
