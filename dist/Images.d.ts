export declare const Images: {
    toHTMLImageElement: (src: import("./ImageLike").ImageLike) => Promise<HTMLImageElement>;
    toHTMLCanvasElement: (src: import("./ImageLike").ImageLike) => Promise<HTMLCanvasElement>;
    loadHTMLImageElement: (src: string) => Promise<HTMLImageElement>;
    toSrcString: (imageLike: import("./ImageLike").ImageLike) => Promise<string>;
    from: (src: import("./ImageLike").ImageLike) => Promise<{
        update: (updater: (img: import("./from").ImageJs) => import("./from").ImageJs) => /*elided*/ any;
        toDataURL: () => string;
        toBlob: () => Promise<unknown>;
        get: <T>(getter: (img: import("./from").ImageJs) => T) => T;
        toHtmlImageElement: () => Promise<HTMLImageElement>;
    }>;
    toBlob: (src: import("./ImageLike").ImageLike, type?: string, quality?: number) => Promise<Blob>;
};
