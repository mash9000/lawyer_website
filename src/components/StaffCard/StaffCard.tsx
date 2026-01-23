import './staff-card/staff-card.scss';
import './staff-card/__angles/staff-card__angles.scss';
import './staff-card/__angles/staff-card__angles--right-bottom.scss';
import './staff-card/__angles/staff-card__angles--left-bottom.scss';
import './staff-card/__angles/staff-card__angles--right-top.scss';
import './staff-card/__angles/staff-card__angles--left-top.scss';
import './staff-card/staff-card--hover.scss';
import './staff-card/__container-for-avatar/staff-card__container-for-avatar.scss';
import './staff-card/__container-for-avatar/__avatar/staff-card__container-for-avatar__avatar.scss';
import './staff-card/__txt-info/staff-card__txt-info.scss';
import './staff-card/__full-name/staff-card__full-name.scss';
import './staff-card/__job-title/staff-card__job-title.scss';
import './staff-card/__appeal/staff-card__appeal.scss';
import './staff-card/__achievement/staff-card__achievement.scss';

import type {StaffCardProps} from "./model/StaffCardProps.ts";
import type {FC} from "react";

export const StaffCard: FC<StaffCardProps> = ({
                                                  imageSrc,
                                                  fullName,
                                                  jobTitle,
                                                  appeal,
                                                  achievement
                                              }) => {
    return (
        <div className="staff-card staff-card--hover">
            <span className='staff-card__angles staff-card__angles--right-bottom'></span>
            <span className='staff-card__angles staff-card__angles--right-top'></span>
            <span className='staff-card__angles staff-card__angles--left-bottom'></span>
            <span className='staff-card__angles staff-card__angles--left-top'></span>
            <div className='staff-card__container-for-avatar'>
                <img
                    className='staff-card__container-for-avatar__avatar'
                    src={imageSrc}
                    alt={`фото сотрудника ${fullName.lastName} ${fullName.firstName} ${fullName.middleName}`}/>
            </div>
            <div className='staff-card__txt-info'>
                <p className='staff-card__full-name'>{`${fullName.lastName} ${fullName.firstName} ${fullName.middleName}`}</p>
                <p className='staff-card__job-title'>{jobTitle}</p>
                <p className='staff-card__appeal'>{appeal}</p>
                <p className='staff-card__achievement'>{achievement}</p>
            </div>
        </div>
    );
}