import { isDefined, isUndefined } from "@mjt-engine/object";
import { ImageLike } from "./ImageLike";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";

export const toBlob = async (
  src: ImageLike,
  type?: string,
  quality?: number
): Promise<Blob> => {
  const canvas = await toHTMLCanvasElement(src);

  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(
        (blob) => {
          if (isDefined(blob)) {
            resolve(blob);
          }
          reject(new Error("Blob is undefined"));
        },
        type,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
};
