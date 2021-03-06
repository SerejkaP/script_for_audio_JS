var info = document.querySelectorAll(".audio_row__duration"); //Получение всех записей;
var a=0,b=1;
var allSeconds=0;
var seconds,minutes,hours,days,mounths;
var stringTime="";
if (info != null && info.length != 0){
    var intervalId=setInterval(function(){
        a=b;
        window.scrollTo(0, document.body.scrollHeight); //Пролистывание страницы вниз
        info = document.querySelectorAll(".audio_row__duration"); //Получение всех записей
        b=info.length;
        if(a==b){
            clearInterval(intervalId);
        
            for(let i=0;i<info.length;i++){
                let stringTime = info[i].innerText; //Получение текста с временем трека
                let time = stringTime.split(":"); //Получение значений времени в массив
                if(time.length==2) allSeconds+=Number(time[1])+60*Number(time[0]); //Получение секунд для случая без часов
                if(time.length==3) allSeconds+=Number(time[2])+60*Number(time[1])+3600*Number(time[0]); //Получение секунд для случая с часами
            }

            if(allSeconds>=60){
                minutes = parseInt(allSeconds/60,10);
                seconds = allSeconds-minutes*60; //Получение секунд
                if(minutes>=60){
                    hours = parseInt(minutes/60,10);
                    minutes = minutes-hours*60; //Получение минут
                    if(hours>=24){
                        days = parseInt(hours/24,10);
                        hours = hours-days*24; //Получение часов
                        if(days>=30){
                            mounths = parseInt(days/30); //Получение месяцев
                            days = days-months*30; //Получение дней
                        }
                    }
                }
            }

            stringTime+="Общая продолжительность треков: "
            if(mounths!=undefined) stringTime+=mounths+" месяца, "; //Прокерки на наличие месяца, дня, часа
            if(days!=undefined) stringTime+=days+" дня, ";
            if(hours!=undefined) stringTime+=hours+" часа, ";
            stringTime+=minutes+" минут, "+seconds+" секунды.";
            console.log(stringTime);
            window.scrollTo(0, 0); //Возврат на верх страницы
        }
    }, 1000);
}