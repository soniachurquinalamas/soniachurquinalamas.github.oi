
  document.getElementById("boton").onclick = function(){
    console.log("Mostrar Datos personales");
    document.getElementById("demo").style.display = "block";
}
document.getElementById("boton2").onclick = function(){
    console.log("Mostrar Medios de comunicación");
    document.getElementById("demo2").style.display = "block";
}

document.getElementById("boton3").onclick = function(){
    console.log("Mostrar Objetivo Profesional");
    document.getElementById("demo3").style.display = "block";
}

document.getElementById("boton4").onclick = function(){
    console.log("Mostrar Formación Académica");
    document.getElementById("demo4").style.display = "block";
}

document.getElementById("boton5").onclick = function(){
    console.log("Mostrar Formación Complementaria");
    document.getElementById("demo5").style.display = "block";
}

document.getElementById("boton6").onclick = function(){
    console.log("Mostrar Conocimientos básicos de informática");
    document.getElementById("demo6").style.display = "block";
}
document.getElementById("boton7").onclick = function(){
    console.log("Mostrar Conocimientos de software");
    document.getElementById("demo7").style.display = "block";
}

document.getElementById("boton8").onclick = function(){
    console.log("Mostrar Conocimientos de Idiomas");
    document.getElementById("demo8").style.display = "block";
}

document.getElementById("ocultar").addEventListener("click", function (){
    console.log("Ocultar Todo");
    document.getElementById("demo").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo2").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo3").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo4").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo5").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo6").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo7").style.display = "none";
});

document.getElementById("ocultar").addEventListener("click", function (){
    document.getElementById("demo8").style.display = "none";
});