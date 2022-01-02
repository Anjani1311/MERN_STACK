function myDisplay(some){
    document.getElementById('demo').innerHTML=some;
}

function fileGet(CallBack){
    let req=new XMLHttpRequest();
    req.open('GET','data.txt');
    req.onload=function(){
        if(req.status==200){
            CallBack(this.responseText);
        }
        else{
            CallBack("Error: "+req.status);
        }
    }
    req.send();
}

fileGet(myDisplay);



//extended markup language(XML)