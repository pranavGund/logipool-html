let num=12;
function isprime(num)
{
    var i=2;
    while(i<num)
    {
        if(num%i==0)
        {
            return i;
        }
        i++;
    }
    return 1;
}
if(isprime(num)==1)
{
    console.log("number is prime");
}
else
{
    console.log("number is not prime");
}
