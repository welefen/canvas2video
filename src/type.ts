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
  promise?: Promise<any>;
  resolve?: (value?: any) => void;
  reject?: (reason?: any) => void;
}

export interface CanvasElement extends HTMLCanvasElement {
  captureStream(frameRate?: number): void;
}

export interface MediaRecorderEvent {
  data: {
    size: number
  }
}



interface FFmpegWorkerReadData {
  data: any
}

interface FFmpegWorker {
  load: () => Promise<void>;
  write: (name?: string, url?: string) => Promise<void>;
  run: (str?: string) => Promise<void>;
  read: (str?: string) => Promise<FFmpegWorkerReadData>;
  terminate: () => Promise<void>;
  transcode: (...args: string[]) => Promise<void>;
  concatDemuxer:(input: string[], out: string, options?: string) => Promise<void>;
}

type FFmpegCreateWorker = (options: FFmpegWorkerOptions) => FFmpegWorker;

interface FFmpeg {
  createWorker: FFmpegCreateWorker
}

declare global {
  interface Window {
    FFmpeg: FFmpeg
  }
}