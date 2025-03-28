import { ImageLike } from "./ImageLike";
import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";

export const imageHelper = (canvas: HTMLCanvasElement) => {
  return {
    width: canvas.width,
    height: canvas.height,

    toDataURL: () => {
      return canvas.toDataURL();
    },
    toBlob: () => {
      return new Promise((resolve, reject) => {
        try {
          canvas.toBlob((blob) => {
            return resolve(blob);
          });
        } catch (error) {
          return reject(error);
        }
      });
    },
  };
};

export type ImageJs = ReturnType<typeof imageHelper>;

export const from = async (src: ImageLike) => {
  const canvas = await toHTMLCanvasElement(src);
  let ijs = imageHelper(canvas);

  const builder = {
    // update: (updater: (img: ImageJs) => ImageJs) => {
    update: (updater: (img: ImageJs) => ImageJs) => {
      ijs = updater(ijs);
      return builder;
    },

    toDataURL: () => {
      return ijs.toDataURL();
    },
    toBlob: () => {
      return ijs.toBlob();
    },
    get: <T>(getter: (img: ImageJs) => T) => {
      return getter(ijs);
    },

    toHtmlImageElement: () => {
      return loadHTMLImageElement(ijs.toDataURL());
    },
  };
  return builder;
};
