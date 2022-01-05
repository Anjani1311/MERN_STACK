document.getElementById('btn').addEventListener('click',MakeRequest);

function MakeRequest(){
    console.log('Button clicked.')
    //Create XMLHttpRequest
    //xhr = XML http request
    const xhr = new XMLHttpRequest();
    if(xhr.readyState===0){
      console.log('open method not yet called  .....',xhr.readyState);
    }
    //Open the configure the request
    //Get is the method for fatchingthe data request and data read
    //URL is the url of the data.txt
    //true is the Async Request
    xhr.open('GET', 'data.txt', true);
    if(xhr.readyState===1){
        console.log('open method called  .....',xhr.readyState);
      }
    
    //implement the onreadystatechange event
    xhr.onreadystatechange =()=>{

        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
                console.log(xhr)
                console.log(xhr.response)
            }else{
                console.log("Error :"+xhr.status)
            }
        }
        
        if(xhr.readyState===2){
            console.log('Response header .....',xhr.readyState);
          }
        if(xhr.readyState===3){
            console.log('Loading .....',xhr.readyState);
          }
        if(xhr.readyState===4){
            console.log('Done  .....',xhr.readyState);
          }        
        
    }

    //send the request
    //this is basically the same as the click event and it will open the file and read it.
    xhr.send();

}