var info;
var fir=0,sec=1;
var times=0;
while(fir!=sec){ 
    fir=sec;
    window.scrollTo(0, document.body.scrollHeight);
    info = document.querySelectorAll(".audio_row__duration");
    sec=info.length;
}

for(let i=0;i<info.length;i++){
    let stringTime = info[i].innerText;
    let time = stringTime.split(":");
    if(time.length==2) times+=Number(time[1])+60*Number(time[0]);
    if(time.length==3) times+=Number(time[2])+60*Number(time[1])+3600*Number(time[0]);
}


// if (time != null && time.length != 0) {
// var fullTime = time[0].innerText;
// alert("Продолжительность треков: " + fullTime);
// }

