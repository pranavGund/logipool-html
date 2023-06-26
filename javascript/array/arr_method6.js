let employee={
    name:"pratik",
    age:28,
    emp_id:101,
    emp_salary:30000
}

for(let key in employee)
{
    if(key=="emp_salary")
    {
        employee.emp_salary=employee.emp_salary+100
    }
}
console.log(employee);