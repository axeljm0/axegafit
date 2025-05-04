

const videos = ["/Img/Video1.mp4", "/Img/Video2.mp4", "/Img/Video3.mp4"]; // Lista de videos
const videoElement = document.getElementById("bg-video");
let current = 0;

function playNextVideo() {
  videoElement.src = videos[current];
  videoElement.play();
  current = (current + 1) % videos.length;
}

videoElement.addEventListener("ended", playNextVideo);
playNextVideo(); 





