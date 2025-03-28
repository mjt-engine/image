import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
export const imageHelper = (canvas) => {
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
                }
                catch (error) {
                    return reject(error);
                }
            });
        },
    };
};
export const from = async (src) => {
    const canvas = await toHTMLCanvasElement(src);
    let ijs = imageHelper(canvas);
    const builder = {
        // update: (updater: (img: ImageJs) => ImageJs) => {
        update: (updater) => {
            ijs = updater(ijs);
            return builder;
        },
        toDataURL: () => {
            return ijs.toDataURL();
        },
        toBlob: () => {
            return ijs.toBlob();
        },
        get: (getter) => {
            return getter(ijs);
        },
        toHtmlImageElement: () => {
            return loadHTMLImageElement(ijs.toDataURL());
        },
    };
    return builder;
};
//# sourceMappingURL=from.js.map