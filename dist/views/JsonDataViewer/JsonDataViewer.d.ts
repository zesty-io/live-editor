/// <reference types="react" />
interface Props {
    search: string;
    data: any;
    setSearch: (e: any) => void;
}
export declare const JsonDataViewer: ({ data, search, setSearch }: Props) => JSX.Element;
export {};
