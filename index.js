function calculate(){
    var height=(document.getElementById("height").value)/100;
    var weight=document.getElementById("weight").value;

    var imc=weight/(height)**2;
    if(imc<18.5){ 
   
   
        window.alert("você está magro" +imc)
    }
    else if (imc<24.9){
   
        window.alert("você está normal" +imc)
    }
    else if(imc<29.9){
   
    
        window.alert("você está com sobrepeso" +imc)
    }
    else if(imc<39.9){
 
        window.alert("você está com obesidade" +imc)
    }
    else if(imc>39.9){
       
        window.alert("você está com obesidade morbida" +imc)
    }
}
