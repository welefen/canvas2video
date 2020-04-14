# canvas2video

Convert dynamic canvas to video, support merge audio (use FFmpeg.js)

## Install

```
npm i canvas2video
```

## Usage

```js
import { Canvas2Video } from "canvas2video";
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
```
## Demo