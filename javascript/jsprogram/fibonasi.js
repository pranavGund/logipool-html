//fibonasi series

let num=5;
let n1=0;
let n2=1;
for(let i=1;i<=num;i++)
{
    console.log(n1);
    let res=n1+n2;
    n1=n2;
    n2=res;
}