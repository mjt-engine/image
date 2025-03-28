import { ByteLike } from "@mjt-engine/byte";

export type ImageLike =
  | string
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | ByteLike;
