# canvas2video

Convert dynamic canvas to video, support merge audio (use FFmpeg.js)

## Usage

```html
<script src="https://unpkg.com/canvas2video@1.0.2/dist/canvas2video.js"></script>
<!--if convert video type or merge audio, must be include ffmpeg.js in html file -->
<script src="https://unpkg.com/@ffmpeg/ffmpeg@0.7.0/dist/ffmpeg.min.js"></script>
<script>
const canvas = document.querySelector("canvas");
const instance = new Canvas2Video({
  canvas: canvas,
  mimeType: "video/webm",
  outVideoType: "mp4",
  workerOptions: {
    // logger: str => console.error(str),
  },
  // audio: 'http://s5.qhres.com/static/465f1f953f1e6ff2.mp3'
});
instance.startRecord();

setTimeout(() => {
  instance.stopRecord();
}, 3000);

instance
  .getStreamURL()
  .then((url) => {
    console.log("video url", url);
  })
  .catch((err) => console.error(err));
</script>
```
## Demo

* [canvas to video](./demo/index.html)
* [canvas to video, convert to mp4](./demo/mp4.html)
* [canvas to video, convert to mp4, merge audio](./demo/audio.html)