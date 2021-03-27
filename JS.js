var info;
var a=0,b=1;
var allSeconds=0;
while(a!=b){ 
    a=b;
    window.scrollTo(0, document.body.scrollHeight);
    info = document.querySelectorAll(".audio_row__duration");
    b=info.length;
}

for(let i=0;i<info.length;i++){
    let stringTime = info[i].innerText;
    let time = stringTime.split(":");
    if(time.length==2) allSeconds+=Number(time[1])+60*Number(time[0]);
    if(time.length==3) allSeconds+=Number(time[2])+60*Number(time[1])+3600*Number(time[0]);
}



// if (time != null && time.length != 0) {
// var fullTime = time[0].innerText;
// alert("Продолжительность треков: " + fullTime);
// }

