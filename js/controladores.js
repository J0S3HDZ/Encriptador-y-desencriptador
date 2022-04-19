function encriptar(){
    var x = document.getElementById('txt').value;
    var res1 = "";

    for(var aux = 0;aux < x.length; aux++){

        if(x.charAt(aux) == "a"){//ai
            res1 = res1+"ai";
        }else if(x.charAt(aux) == "e"){ //enter
            res1 = res1+"enter";
        }else if(x.charAt(aux) == "i"){//imes
            res1 = res1+"imes";
        }else if(x.charAt(aux) == "o"){//ober
            res1 = res1+"ober";
        }else if(x.charAt(aux) == "u"){//ufat
            res1 = res1+"ufat";
        }else{
            res1 = res1+x.charAt(aux);
        }
    }
    document.getElementById("encriptado").innerHTML = res1;
    document.getElementById("tt").innerHTML = "";
    togle();
}
function desencriptar(){
    var txDes = document.getElementById('txt').value;
    var rea = /ai/gi;
    var ree = /enter/gi;
    var rei = /imes/gi;
    var reo = /ober/gi;
    var reu = /ufat/gi;
    var des = "";
    des = txDes.replace(rea,"a");
    des = des.replace(ree,"e");
    des = des.replace(rei,"i");
    des = des.replace(reo,"o");
    des = des.replace(reu,"u");
    document.getElementById("encriptado").innerHTML = des;

}
function copiar() {
    var copyText = document.getElementById("encriptado");
    copyText.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: "+copyText.value);

}
function togle(){

    var e1 = document.getElementById("encriptado").style.textAlign="left";//textEncripted
    var e2 = document.getElementById("bx1").style.display="none";//pricipalDiv
    var e3 = document.getElementById("bx2").style.display="contents";//secondDiv
    
    /* -- Copy Button -- */
    var elemento = document.getElementById("btnH");
    var hidden = elemento.getAttribute("hidden");
    elemento.removeAttribute("hidden");
}

