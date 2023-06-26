// let str="pranav"
var readline=require("readline-sync")
console.log("enter string");
let ip=String(readline.question())

let res="";

for (let char of ip) 
{
    if(char=="a" || char=="A")
    {
        res=res+"@"
    }
    else{
        res+=char;
    }
}
console.log(res);


//hkfjksfjklsfk=----------------------------




  

