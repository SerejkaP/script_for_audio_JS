var info;
var a=0,b=1;
var allSeconds=0;
var seconds,minutes,hours,days,mounths;
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

if(allSeconds>=60){
    minutes = parseInt(allSeconds/60,10);
    seconds = allSeconds-minutes*60;
    if(minutes>=60){
        hours = parseInt(minutes/60,10);
        minutes = minutes-hours*60;
        if(hours>=24){
            days = parseInt(hours/24,10);
            hours = hours-days*24;
            if(days>=30){
                mounths = parseInt(days/30);
                days = days-months*30;
            }
        }
    }
}

console.log('Время всех треков: '+mounths+' '+days+' '+hours+' '+minutes+' '+seconds);

// if (time != null && time.length != 0) {
// var fullTime = time[0].innerText;
// alert("Продолжительность треков: " + fullTime);
// }

