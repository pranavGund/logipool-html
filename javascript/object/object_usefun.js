const Person=
{
    name:"pranav",
    last_name:"gund",
    age:23,

}

Person.height=5;
// Person.Abc=function()
// {
//     console.log("Running.....");
// }
// Person.Abc()


//other way to use function


Person.Abc=() => console.log("Running....");
Person.Abc()

Person.Student=
{
    rollNo:101,
    yop:2023
}

console.log(Person.Student);

