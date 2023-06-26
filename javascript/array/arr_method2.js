let arr1=[1,2,3,4,5,6]

let res=arr1.filter(isEven)

console.log(res);

function isEven(num)
{
    if(num%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
