container.onmouseover = container.onmouseout = eHandler;

function eHandler(e){
     function str(el){
         if(!el)  return 'null'
         return el.tagName||el.className
     }


    log.value+=e.type+":"+str(e.target) +' relatedtarget=' +str(e.relatedTarget)+"\n";
    log.scrollTop=log.scrollHeight;

    if(e.type==='mouseover'){
        e.target.style.background="pink";
    }
    if(e.type==='mouseout'){
        e.target.style.background="";
    }
}