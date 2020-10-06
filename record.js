const start = document.getElementById("start");
const stop = document.getElementById("stop");
const video = document.querySelector("video");
const yt = document.getElementById("yt");

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
  //---------------------------------------------------------
  // screen recorder
    stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
            cursor: "always",
            mediaSource: "screen"
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
    });
    recorder = new MediaRecorder(stream);

    const chunks = [];
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = e => {
        download(chunks);
    };

    recorder.start();
  //---------------------------------------------------------

  //---------------------------------------------------------
  // webcam recorder
    webcamStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    });
    camera = new MediaRecorder(webcamStream);
    video.srcObject = webcamStream
  //---------------------------------------------------------
}


start.addEventListener("click", () => {
  start.style.display = 'none';
  text.style.display = 'none';
  video.style.display = 'inline-block';
  yt.style.display = 'inline-block';
  startRecording();
});

stop.addEventListener("click", () => {
  stop.style.display = 'none';
  camera.stop();
  recorder.stop();
  webcamStream.getVideoTracks()[0].stop();
  stream.getVideoTracks()[0].stop();
});
