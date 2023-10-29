let my_name=document.querySelector("#input1");
let distance=document.querySelector("#input2");
let btn=document.querySelector("#my_button");
let eta= document.querySelector("#my_eta");
const price= 0.21;
let final_price = 0;

btn.addEventListener("click",function()
{   
    distance.value = parseInt(distance.value); 
    final_price= parseInt(price * distance.value); 
    
    if (eta.value=="Minorenne"){
        final_price= final_price - (final_price * 0.20)
    }
    if (eta.value=="Senior"){
        final_price= final_price - (final_price * 0.40)
    }

    
    alert(final_price + "   " + distance.value + price + "€");


/*     document.getElementById("no-biglietto").classList.add("d-block") */
    document.getElementById("no-biglietto").classList.add("d-none");
/*     document.getElementById("biglietto").classList.add("d-block"); */
    document.getElementById("biglietto").classList.remove("d-none");
    
    
})