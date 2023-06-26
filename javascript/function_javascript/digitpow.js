let a=153;
let temp=a;

function Length(num)
{
    let count=0;
    while (num!=0)
     {
        count++;
        num=Math.floor(num/10)

    }
    return count
}
let res=Length(a);
console.log(res);



// function  Power(base, raise)
//  {
//     let pow=1
//     for(let i=1;i<=raise;i++)
//     {
//          pow=pow*base;  

//     }
//     return  pow;
// }

// let length=Length(a)
// let sum=0;
// while(temp!=0)
// {
//     let rem=temp%10;
//     let pow=Power(rem,length)
//     sum=sum+pow;
//     temp=Math.floor(temp/10)
// }
// if(sum==a)
// {
//     console.log("it is armstrong number");
// }
// else
// {
//     console.log("it is not armstrong number");
// }

