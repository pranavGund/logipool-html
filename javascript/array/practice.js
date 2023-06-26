// function printArrayWithA(strings) {
//     const filteredArray = strings.filter(str => str.includes('A') || str.includes('a'));
//     console.log(filteredArray);
//   }
  
//   // Example usage
//   const array = ['Apple', 'banana', 'orange', 'kiwi', 'Mango'];
//   printArrayWithA(array);

let arr=["pranav",'pratik',"shri","krish"]
let res=arr.filter(printA)
console.log(res);
function printA(str)
{
    if(str.includes("a") || str.includes("A"))
    {
        return true
    }
}



// let arr1=["pranav",'pratik',"shri","krish"]
// let res1=arr.filter(printA)
// console.log(res);
// function printA(str)
// {
//     if(!str.includes("a") && !str.includes("A"))
//     {
//         return true
//     }
// }


