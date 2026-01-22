export interface ButtonProps {
    title: string;
    parameters?: any[];
    functionPerformed: (parameters?: any[]) => void;
}