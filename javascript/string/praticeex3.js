let str="bvcf";
let res="";

for(i=0;i<=str.length-1;i++)
{
  let char=str.charAt(i)
  let ascii=char.charCodeAt(char)
  if(ascii>=97 && ascii<=122)
  {
    ascii=ascii-32
  }
  // res=String.fromCharCode(ascii)+res;   //reverse an uppercase
  res+=String.fromCharCode(ascii)
}
console.log(res);
