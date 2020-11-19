type Callback = (str: string) => void;

export interface FFmpegWorkerOptions {
  corePath?: string;
  workerPath?: string;
  workerBlobURL?: string;
  logger?: Callback;
  progress?: Callback;
}
export interface Options {
  canvas?: HTMLCanvasElement;
  mimeType?: string;
  audio?: string;
  outVideoType?: string;
  workerOptions?: FFmpegWorkerOptions;
  transcodeOptions?: string;
  concatDemuxerOptions?: string;
}

export interface Deferred {
  promise?: Promise<Blob>;
  resolve?: (value?: Blob) => void;
  reject?: (reason?: Error) => void;
}

export interface CanvasElement extends HTMLCanvasElement {
  captureStream(frameRate?: number): void;
}

export interface MediaRecorderEvent {
  data: {
    size: number
  }
}

interface FFmpegWorker {
  load: () => Promise<void>;
  FS: (...args: any) => any;
  run: (...args: any) => Promise<void>;
  transcode: (...args: string[]) => Promise<void>;
  concatDemuxer:(input: string[], out: string, options?: string) => Promise<void>;
}

type FFmpegCreateWorker = (options: FFmpegWorkerOptions) => FFmpegWorker;

interface FFmpeg {
  createFFmpeg: FFmpegCreateWorker,
  fetchFile: (...args: any) => Promise<any>
}

declare global {
  interface Window {
    FFmpeg: FFmpeg
  }
}