const videoContainer = document.querySelector(".video-container");

const searchParams = new URLSearchParams(window.location.search);
const paravidurl = searchParams.get("url");
const parashowcontroller = searchParams.get("hidemenu");
const paraautorotate = searchParams.get("autorotate");
const paraautorotatespeed = searchParams.get("autorotatespeed");

const panovid = paravidurl ?? "../assets/videos/vr.mp4";
const panoramaVideo = new PANOLENS.VideoPanorama(panovid);

const viewer = new PANOLENS.Viewer({
  container: videoContainer,
  autoRotate: paraautorotate,
  autoRotateSpeed: paraautorotatespeed ?? 0.3,
  controlBar: !parashowcontroller,
});

viewer.add(panoramaVideo);
