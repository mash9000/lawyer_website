import './staff-card/staff-card.scss';
import './staff-card/__container-for-avatar/staff-card__container-for-avatar.scss';
import './staff-card/__container-for-avatar/__avatar/staff-card__container-for-avatar__avatar.scss';
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
        <div className="staff-card">
            <div className='staff-card__container-for-avatar'>
                <img
                    className='staff-card__container-for-avatar__avatar'
                    src={imageSrc}
                    alt={`фото сотрудника ${fullName.lastName} ${fullName.firstName} ${fullName.middleName}`}/>
            </div>
            <p className='staff-card__full-name'>{`${fullName.lastName} ${fullName.firstName} ${fullName.middleName}`}</p>
            <p className='staff-card__job-title'>{jobTitle}</p>
            <p className='staff-card__appeal'>{appeal}</p>
            <p className='staff-card__achievement'>{achievement}</p>
        </div>
    );
}