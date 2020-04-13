type Callback = (str: string) => void;

export interface Options {
  canvas?: HTMLCanvasElement;
  mimeType?: string;
  corePath?: string;
  workerPath?: string;
  workerBlobURL?: string;
  logger?: Callback;
  progress?: Callback;
  audio?: string;
  outVideoType?: string;
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
  terminate: () => Promise<void>
}

type FFmpegCreateWorker = (options: Options) => FFmpegWorker;

interface FFmpeg {
  createWorker: FFmpegCreateWorker
}

declare global {
  interface Window {
    FFmpeg: FFmpeg
  }
}