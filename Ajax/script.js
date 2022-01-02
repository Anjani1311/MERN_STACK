document.getElementById('btn').addEventListener('click',MakeRequest);
function MakeRequest(){
    const xhr= new XMLHttpRequest();
    xhr.open('GET', 'data.txt');
    xhr.onreadystatechange=displaydata;

    function displaydata(){
        if(xhr.readyState === 4){
            if(xhr.status ===200){
                console.info(xhr.responseText);
            }else{
                console.info('An error has occured');
            }
        }
    };
    xhr.send();
}

//fetch() 