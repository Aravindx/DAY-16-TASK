var time=document.querySelector("h1")
let timesecond=10;

time.innerHTML=`${timesecond}`;
var countdown=setInterval(()=>{
    timesecond--;
    time.innerHTML=`${timesecond}`;
    if(timesecond<1){
        clearTimeout(timesecond);
        time.innerHTML="YOU ARE NOW A MEMBER OF GUVI FAMILY"
    }
},1000)
