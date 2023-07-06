

// var btn=document.getElementById("btn");

//  btn.addEventListener("click",function btnClick(){
//      alert("button was click")
//  })

//  var btn=document.getElementById("btn");

//  btn.addEventListener("mouseover",function btnClick(){
//      alert("button was click")
//  })



//  function btnClick(){
//     alert("button was click");
//  }
//  document.getElementById("btn").onclick=btnClick



document.getElementById("img1").onmouseover=abc;

function abc(){
    document.getElementById("img1").style.filter='grayscale(0%)';
}

document.getElementById("img1").onmouseout=xyz;

function xyz(){
    document.getElementById("img1").style.filter='grayscale(100%)';
}