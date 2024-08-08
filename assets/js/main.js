const ip=document.querySelector("#ipAddress");

const xhr=new XMLHttpRequest();

xhr.onreadystatechange=()=>{
    if(xhr.readyState==4 && xhr.status==200){
        ip.textContent=xhr.responseText;
    }
   
    
}

xhr.open("GET",
    "https://ipv4.icanhazip.com"
)
xhr.send();
console.log(xhr);
