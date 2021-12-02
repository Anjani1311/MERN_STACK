table.onmouseover =function (e){
    let target=e.target;
    target.style.backgroundColor="yellow";
 
    text.value +='mouse-over :'+target.tagName+" classname: "+target.className+'\n';
    text.scrollTop=text.scrollHeight;
 }
 
 table.onmouseout =function (event){
     let target=event.target;
     target.style.backgroundColor="";
 
     text.value +='mouse-out :'+target.tagName+'\n';
     text.scrollTop=text.scrollHeight;
  }