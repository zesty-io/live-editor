export declare const getPageData: () => Promise<{
    data: {
        error: boolean;
        production: boolean;
    };
    response: Response;
}>;
export declare const fetchData: (uri: string, setFunc: (e: any) => void, token: string | any) => Promise<void>;
export declare const fetchJSON: (uri: string, setFunc: (e: any) => any, token: string | any) => Promise<{
    data: any;
    res: any;
    error: boolean;
}>;
