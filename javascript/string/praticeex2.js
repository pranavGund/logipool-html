let str="ABccaf"
let res="";


//uppercase to lowercase


for(i=0;i<=str.length-1;i++)
{
  let char=str.charAt(i)
  let ascii=char.charCodeAt(char)
  if(ascii>=65 && ascii<=90)
  {
    ascii=ascii+32;

  }
  res=res+String.fromCharCode(ascii)
}

console.log(res);