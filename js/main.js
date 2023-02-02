document.addEventListener("readystatechange",cargarEventos,false);
function cargarEventos(){
    document.getElementById("headerBtn").addEventListener("click",mobileMenu);
}

function mobileMenu(){
    var list = document.getElementById("headerList");
    if(list.classList.contains("oculto")){
        list.classList.remove("oculto")
        
    }else{
        list.classList.add("oculto")
    }
}