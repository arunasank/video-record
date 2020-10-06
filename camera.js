const stop = document.getElementById("stop");
const video = document.querySelector("video");
let camera, webcamStream;

console.log(window.recorder, window.stream)
function download(chunks, fname="capture.mp4") {
  var blob = new Blob(chunks, {
    type: "video/mp4"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "capture.mp4";
  a.click();
  window.URL.revokeObjectURL(url);
}

async function startRecording() {

}

startRecording();

stop.addEventListener("click", () => {
  recorder.stop();
  // webcamStream.getVideoTracks()[0].stop();
});
