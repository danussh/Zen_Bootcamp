var oXHR = new XMLHttpRequest();
var url_string = 'https://dog.ceo/api/breeds/list/all';
oXHR.open("GET", url_string, true);
oXHR.onreadystatechange = function (oEvent) {  
    if (oXHR.readyState === 4) {  
        if (oXHR.status === 200) {  
          console.log(oXHR.responseText)  
        } else {  
           console.log("Error", oXHR.statusText);  
        }  
    }  
}; 

oXHR.send(null); 