import type {CSSProperties} from "react";

export interface ButtonProps {
    title: string;
    parameters?: any[];
    functionPerformed: (parameters?: any[]) => void;
    additionalStylesForSomeReason?: CSSProperties;
    role?: string;
    ariaLabel?: string;
}