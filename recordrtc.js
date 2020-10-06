let camera = document.getElementById("camera")
const stop = document.getElementById("stop");

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
})
.then(function(cameraStream) {
  camera.srcObject = cameraStream;
})
.catch(function(err) {
    console.log("An error occurred: " + err);
});

stop.addEventListener("click", () => {
  // stop.setAttribute("disabled", true);
  // start.removeAttribute("disabled");

  recorder.stop();
  stream.getVideoTracks()[0].stop();
});
