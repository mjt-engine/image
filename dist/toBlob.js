import { isDefined } from "@mjt-engine/object";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
export const toBlob = async (src, type, quality) => {
    const canvas = await toHTMLCanvasElement(src);
    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob((blob) => {
                if (isDefined(blob)) {
                    resolve(blob);
                }
                reject(new Error("Blob is undefined"));
            }, type, quality);
        }
        catch (error) {
            reject(error);
        }
    });
};
//# sourceMappingURL=toBlob.js.map