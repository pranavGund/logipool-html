const Person=
{
    name:"varun",
    age:22,
    "Fevorite Color":"Black",
    "contact number":9730528318

}

const readline=require("readline-sync")
console.log("Which detail you want from person object");
let ip=String(readline.question())
console.log(Person[ip]);