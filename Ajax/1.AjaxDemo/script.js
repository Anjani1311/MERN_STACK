document.getElementById('btn').addEventListener('click',MakeRequest);

function MakeRequest(){
    console.log('Button clicked.')
    //Create XMLHttpRequest
    //xhr = XML http request
    const xhr = new XMLHttpRequest();
    //Open the configure the request
    //Get is the method for fatchingthe data request and data read
    //URL is the url of the data.txt
    //true is the Async Request
    xhr.open('GET', 'data.txt', true);
    
    //implement the onreadystatechange event
    xhr.onreadystatechange = ShowData;
    function ShowData(){
        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
                console.log(xhr)
                console.log(xhr.response)
            }else{
                console.log("Error :"+xhr.status)
            }
        }
    }

    //send the request
    //this is basically the same as the click event and it will open the file and read it.
    xhr.send();

}