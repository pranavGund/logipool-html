function  CalculatePower(base, raise)
 {
    let pow=1
    for(let i=1;i<=raise;i++)
    {
         pow=pow*base;  

    }
    return  pow;
}
var res=CalculatePower(2,4);
console.log(res);