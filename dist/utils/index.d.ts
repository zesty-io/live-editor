/// <reference types="react" />
export declare const canUseDOM: () => boolean;
export declare const convertToArray: (content: any) => {
    [x: string]: any;
}[];
export declare const flattenObj: (obj: any, parent: any, res?: any) => any;
export declare function deepen(obj: any): {};
export declare const headerZUID: (response: any) => any;
export declare const PrettyPrintJson: ({ data }: any) => JSX.Element;
export declare function getCookie(cname: string): string;
export declare function setCookie(cname: string, cvalue: string, exdays: any): void;
export declare function checkCookie(): void;
export declare function updateToken(name: string, value: string): void;
export declare const scrollToView: (elementId: string) => void;
