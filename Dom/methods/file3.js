//    create element 
var newDiv = document.createElement('div');
// add class 
newDiv.className = 'box';
// add id 
newDiv.id = 'textbox';

// add content 
 var newDivText = document.createTextNode('welcome to css');


console.log(newDiv);
console.log(newDivText);
//add content to div  

 newDiv.appendChild(newDivText);

 console.log(newDiv);


var container = document.querySelector('#content');

newDiv.style.color ='crimson';
newDiv.style.backgroundColor = 'yellow';

 var form = document.querySelector('form');
 container.insertBefore(newDiv,form);