import { Asserts } from "@mjt-engine/assert";
import { ImageLike } from "./ImageLike";
import { toHTMLImageElement } from "./toHTMLImageElement";

export const toHTMLCanvasElement = async (src: ImageLike) => {
  if (src instanceof HTMLCanvasElement) {
    return src;
  }
  const image = await toHTMLImageElement(src);
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  Asserts.assertValue(canvas.getContext("2d")).drawImage(image, 0, 0);
  return canvas;
};
