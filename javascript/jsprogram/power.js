let num=123
let temp=num;
let temp2=num;

let length=0;
let sum=0;

while (temp !=0)
 {
    temp=Math.floor(temp/10);
    length++;   
}

while (temp2 !=0)
 {
    let rem=temp2%10;
    let pow=1;
    for (let i=1; i<=length; i++)  
    {
        pow=pow*rem;

    }
     sum=sum+pow;
     temp2=Math.floor(temp2/10); 
}
console.log(sum);