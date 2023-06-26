var readline=require("readline-sync")
console.log("enter the number")
 var n=Number(readline.question())


let count=0;

for(let i=2; i<=50;i++)
{
    for(let j=2;j<i;j++)
        {
            if(i%j==0)
             {
                 count++;
                //  break;
        

    }
        }
    if(count==0)
    {
        console.log(i);
    }
}


console.log(count);

if(count!=0)
{
    console.log(("it is not prime number"));
}
else
{
    console.log("it is prime number");
}