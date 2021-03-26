var time = document.getElementsByClassName("audio_row__duration audio_row__duration-s _audio_row__duration");
if (time != null && time.length != 0) {
var fullTime = time[0].innerText;
alert("Продолжительность треков: " + fullTime);
}