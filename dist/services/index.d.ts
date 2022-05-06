export declare const getPageData: () => Promise<{
    data: {
        error: boolean;
        production: boolean;
    };
    response: Response;
}>;
export declare const fetchData: (uri: string, setFunc: (e: any) => void, token: string) => Promise<void>;
