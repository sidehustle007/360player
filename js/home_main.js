const imageContainer = document.querySelector(".image-container");

const searchParams = new URLSearchParams(window.location.search);
const paraimgurl = searchParams.get("url");

const panoimg = paraimgurl ?? "../assets/images/image1.jpeg";
const panoramaImage = new PANOLENS.ImagePanorama(panoimg);

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

const vidroute = "page/video.html?url=";
const imgroute = "page/photo.html?url=";

function updateVidUrl() {
  const urlInput = document.getElementById("urlInput");
  const newUrl = vidroute + urlInput.value;
  window.open(newUrl, "_blank");
}

function updateImgUrl() {
  const urlInput = document.getElementById("urlInput");
  const newUrl = imgroute + urlInput.value;
  window.open(newUrl, "_blank");
}
