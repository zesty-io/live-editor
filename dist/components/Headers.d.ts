import React from "react";
interface Tabs {
    id: number;
    label: string;
    value: string;
}
interface Props {
    children: React.ReactNode;
    content: any;
    setcurrentTab: (e: string) => void;
    tabs: Tabs[];
    response: any;
}
export declare const Headers: ({ response, children, content, setcurrentTab, tabs }: Props) => JSX.Element;
export {};
