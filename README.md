# canvas2video

Convert dynamic canvas to video, support merge audio (use FFmpeg.js)


## Usage

```html
<script src="https://unpkg.com/canvas2video@1.0.2/dist/canvas2video.js"></script>
<script>
const canvas = document.querySelector("canvas");
const instance = new Canvas2Video({
  canvas: canvas,
  mimeType: "video/webm",
  outVideoType: "mp4",
  workerOptions: {
    // logger: str => console.error(str),
  },
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