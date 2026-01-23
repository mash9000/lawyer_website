import type {ReactNode} from "react";

export interface HeaderProps {
    contactTelephoneNumber: string;
    contactEmail: string;
    requestACall: {
        text: string;
        actionBeingPerformed: () => void;
    }
    baseLinks: {text: string, link: URL}[];
    children: ReactNode;
}