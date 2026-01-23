import './review/review.scss';
import './review/__no-image/review__no-image.scss';
import './review/__image/review__image.scss';
import './review/__employee-box/__company/review__employee-box__company.scss';
import './review/__employee-box/__name/review__employee-box__name.scss';
import './review/__body/review__body.scss';
import './review/__pen/review__pen.scss';

import type {ReviewProps} from "./model/ReviewProps.ts";
import type {FC} from "react";

export const Review: FC<ReviewProps> = ({imageSrc, company, name, body}) => {
    return (
        <article className="review">
            {imageSrc !== '' && <img
                                    className='review__image'
                                    src={imageSrc}
                                    alt={`компания "${company}"`}/>}
            {imageSrc == '' && <div className='review__no-image'></div> }
            <div className='review__employee-box'>
                <p className='review__employee-box__company'>{company}</p>
                <p className='review__employee-box__name'>{name}</p>
            </div>
            <p className='review__body'>{body}</p>
            <img
                className='review__pen'
                src='/images/users-who-left-a-review/review-pen.svg'
                alt='рисунок пера'/>
        </article>
    )
}