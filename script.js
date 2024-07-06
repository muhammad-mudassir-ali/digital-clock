
function updateclock(){

    const now=new Date();

    let hours = now.getHours();
    let meriduim=hours>=12?"PM":"AM";
    hours=hours%12||12;

    hours=hours.toString().padStart(2,'0');

    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    const timestring=`${hours}:${min}:${sec}  ${meriduim}`;

    document.getElementById("clock").textContent=timestring;
    
}

updateclock();
setInterval(updateclock,1000);