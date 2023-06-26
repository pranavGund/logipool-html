var readline=require("readline-sync");
console.log("Enter your Password");
var str=String(readline.question());

// let str="prAnav@12345";
let res="";
for(i=0;i<=str.length-1;i++){
    let char=str[i];
    if((char>='a' && char<='z')||(char>='A' && char<='Z'))
    {
        res+=char;
    }

}
console.log(res);