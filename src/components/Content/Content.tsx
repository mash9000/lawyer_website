import './content/content.scss';
import './content/__cover-img/content__cover-img.scss';
import './content/content--hover.scss';
import './content/__show/content__show.scss';
import './content/__body/content__body.scss';
import './content/__publication-date/content__publication-date.scss';
import './content/__heading/content__heading.scss';
import './content/__container-for-image/content__container-for-image.scss';
import './content/__image/content__image.scss';
import './content/__angles/content__angles.scss';
import './content/__angles/content__angles--right-bottom.scss';
import './content/__angles/content__angles--right-top.scss';
import './content/__angles/content__angles--left-bottom.scss';
import './content/__angles/content__angles--left-top.scss';

import type {ContentProps} from "./model/ContentProps.ts";
import type {FC} from "react";
import {format} from "date-fns";
import {ru} from "date-fns/locale";

export const Content: FC<ContentProps> = ({
                                              imageSrc,
                                              heading,
                                              publicationDate,
                                              body
                                          }) => {
    return (
        <article className='content content--hover'>
            <div className='content__cover-img'></div>
            <span className='content__angles content__angles--right-bottom'></span>
            <span className='content__angles content__angles--right-top'></span>
            <span className='content__angles content__angles--left-bottom'></span>
            <span className='content__angles content__angles--left-top'></span>
            <div className='content__show'></div>
            <div className='content__container-for-image'>
                <img
                    className='content__image'
                    src={imageSrc}
                    alt={`фото "${heading}"`}/>
            </div>
            <h3 className='content__heading'>{heading}</h3>
            <p className='content__publication-date'>{format(publicationDate, "d MMM yyyy 'г.'", {locale: ru})}</p>
            <p className='content__body'>{body}</p>
        </article>
    );
}