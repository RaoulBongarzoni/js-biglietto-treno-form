let my_name=document.querySelector("#input1");
let distance=document.querySelector("#input2");
let btn1=document.querySelector("#my_button");
let btn2=document.querySelector("#my_clear");
let eta= document.querySelector("#my_eta");
const price= 0.21;
let final_price = 0;

btn1.addEventListener("click",function()
{   
    
    distance.value = parseInt(distance.value); 
    final_price= parseInt(price * distance.value); 
    
    if (eta.value=="Under-18"){
        final_price= final_price - (final_price * 0.20);
        
    }
    if (eta.value=="Senior"){
        final_price= final_price - (final_price * 0.40);
        
    }

    carrozza = Math.round(Math.random() * 10);
    Cp= Math.round(Math.random() * 100000);
    
    document.getElementById("NomePasseggero").innerHTML = my_name.value;
    document.getElementById("sconto").innerHTML = `Biglietto ${eta.value}`;
    
    document.getElementById("random10").innerHTML = carrozza;
    document.getElementById("random5").innerHTML = Cp;
    document.getElementById("costo").innerHTML = final_price + " €";


/*     document.getElementById("no-biglietto").classList.add("d-block") */
    document.getElementById("no-biglietto").classList.add("d-none");
/*     document.getElementById("biglietto").classList.add("d-block"); */
    document.getElementById("biglietto").classList.remove("d-none");
    
    
})

btn2.addEventListener("click", function(){

    
    /*     document.getElementById("no-biglietto").classList.add("d-block") */
    document.getElementById("no-biglietto").classList.remove("d-none");
    /*     document.getElementById("biglietto").classList.add("d-block"); */
    document.getElementById("biglietto").classList.add("d-none");
    
}


)