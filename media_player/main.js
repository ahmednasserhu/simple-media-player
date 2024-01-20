const a = document.getElementsByTagName("audio")[0];
const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnStop = document.getElementById("stop");
const btnMute = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const durationRange = document.getElementById("duration");
const speed = document.getElementById("rate");
const songImg = document.getElementById("img")
const songName = document.getElementById('songName')

btnPlay.addEventListener("click", function () {
  a.play();
});

btnPause.addEventListener("click", function () {
  a.pause();
  updateDurationRange();
});

btnStop.addEventListener("click", function () {
  a.load();
  a.pause();
  updateDurationRange();
});

btnMute.addEventListener("click", function () {
  a.muted = !a.muted;
});

volumeRange.addEventListener("input", function () {
  a.volume = volumeRange.value;
});

window.addEventListener("load", function () {
  updateDurationRange();
});

a.addEventListener("loadedmetadata", function () {
  updateDurationRange();
});

a.ontimeupdate = function () {
  durationRange.value = a.currentTime;
};

durationRange.addEventListener("input", function () {
  a.currentTime = durationRange.value;
});

speed.addEventListener("input", function () {
  a.playbackRate = speed.value;
});

function updateDurationRange() {
  durationRange.max = a.duration;
  durationRange.value = a.currentTime;
}

function changeSong(songSrc, imageSrc, playlistText) {
    a.src = songSrc;
    songImg.src = imageSrc;
    songName.innerText = playlistText;
    a.play();
}
