let my_name=document.querySelector("#input1");
let distance=document.querySelector("#input2");
let btn=document.querySelector("#my_button");
let eta= document.querySelector("#my_eta");
const price= 0.21;
let final_price;

btn.addEventListener("click",function()
{

    
})

final_price= Math.round(((distance * price) + Number.EPSILON) * 100) /100;

if(parseInt(eta) < 18){
    final_price=Math.round(((final_price - (final_price * 20 / 100)) + Number.EPSILON) * 100) /100;
}
if(parseInt(eta) >= 65){
    final_price=Math.round(((final_price - (final_price * 40 / 100)) + Number.EPSILON) * 100) /100;
}