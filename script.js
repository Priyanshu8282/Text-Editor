<<<<<<< HEAD
const textarea= document.getElementById("textarea");
 
function f1(e){ 
    let value=e.value;
    textarea.style.fontSize=value+"px";
}

function f2(e){ 
    if(textarea.style.fontWeight=="bold"){ 
      textarea.style.fontWeight = "normal" ; 
      e.classList.remove("active");
    }
    else{ 
        textarea.style.fontWeight = "bold" ;   
        e.classList.remove("active");
    }
}
 function f3(e){ 
    if(textarea.style.fontStyle=="italic"){ 
        textarea.style.fontStyle="normal";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.fontStyle="italic"; 
        e.classList.remove("active");
    }
 }
 function f4(e){ 
    if(textarea.style.textDecoration=="underline"){ 
        textarea.style.textDecoration="none";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.textDecoration="underline"; 
        e.classList.remove("active");
    }
 }
 
 function f5(e){ 
    textarea.style.textAlign="left";

 }
 function f6(e){ 
    textarea.style.textAlign="center";
    
 }
 function f7(e){ 
    textarea.style.textAlign="right";
    
 }
 function f8(e){ 
    if(textarea.style.textTransform=="uppercase"){ 
        textarea.style.textTransform="none";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.textTransform="uppercase"; 
        e.classList.add("active");
    }
 }
function f9(e){ 
    textarea.style.fontWeight="normal";
    textarea.style.textAlign="left";
    textarea.style.fontStyle="normal";
    textarea.style.textTransform="capitalize";
    textarea.value="";

}
function f10(e){ 
    let value =e.value;
    textarea.style.color=value;
}
function toggleButton(button) {
    button.classList.toggle('selected');
}
function toggleButton(button) {
    button.classList.toggle('selected');
}


window.addEventListener("load"),()=>{ 
    textarea.value="";
}


=======
const textarea= document.getElementById("textarea");

function f1(e){ 
    let value=e.value;
    textarea.style.fontSize=value+"px";
}

function f2(e){ 
    if(textarea.style.fontWeight=="bold"){ 
      textarea.style.fontWeight = "normal" ; 
      e.classList.remove("active");
    }
    else{ 
        textarea.style.fontWeight = "bold" ;   
        e.classList.remove("active");
    }
}
 function f3(e){ 
    if(textarea.style.fontStyle=="italic"){ 
        textarea.style.fontStyle="normal";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.fontStyle="italic"; 
        e.classList.remove("active");
    }
 }
 function f4(e){ 
    if(textarea.style.textDecoration=="underline"){ 
        textarea.style.textDecoration="none";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.textDecoration="underline"; 
        e.classList.remove("active");
    }
 }
 
 function f5(e){ 
    textarea.style.textAlign="left";

 }
 function f6(e){ 
    textarea.style.textAlign="center";
    
 }
 function f7(e){ 
    textarea.style.textAlign="right";
    
 }
 function f8(e){ 
    if(textarea.style.textTransform=="uppercase"){ 
        textarea.style.textTransform="none";
        e.classList.remove("active");
    }
    else{ 
        textarea.style.textTransform="uppercase"; 
        e.classList.add("active");
    }
 }
function f9(e){ 
    textarea.style.fontWeight="normal";
    textarea.style.textAlign="left";
    textarea.style.fontStyle="normal";
    textarea.style.textTransform="capitalize";
    textarea.value="";

}
function f10(e){ 
    let value =e.value;
    textarea.style.color=value;
}

window.addEventListener("load"),()=>{ 
    textarea.value="";
}

>>>>>>> fb77e65f489be62427bd66ed7fe318afa071ef23
