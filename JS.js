var info;
var fir=0,sec=1;
var times=0;
while(fir!=sec){ 
    fir=sec;
    window.scrollTo(0, document.body.scrollHeight);
    info = document.querySelectorAll(".audio_row__duration");
    sec=info.length;
}

// if (time != null && time.length != 0) {
// var fullTime = time[0].innerText;
// alert("Продолжительность треков: " + fullTime);
// }

