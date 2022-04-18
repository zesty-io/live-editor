import * as React from "react";
interface Props {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
export declare const SearchAppBar: ({ value, onChange }: Props) => JSX.Element;
export {};
