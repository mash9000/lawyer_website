import './page-section-heading/page-section-heading.scss';

import type {PageSectionHeadingProps} from "./model/PageSectionHeadingProps.ts";
import type {FC} from "react";

export const PageSectionHeading: FC<PageSectionHeadingProps> = ({title}) => {
    return (
        <h1 className='page-section-heading'>{title}</h1>
    );
}