let my_name=document.querySelector("#input1");
let distance=document.querySelector("#input2");
let btn=document.querySelector("#my_button");
let eta= document.querySelector("#my_eta");


btn.addEventListener("click",function()
{

    alert("sda" + my_name.value  + distance.value + eta.value );
})