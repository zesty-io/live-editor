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
export declare const handleEdit: (origData: any, url: string, token: string, dataToEdit: any) => Promise<void>;
export declare const transformContent: (content: any, search: any) => {}[] | {
    content: any;
} | undefined;
export declare function toggleOpenState(bool: boolean, setOpen: any, expandBody: any): void;
export declare const getJsonUrl: (customDomain?: string) => string;