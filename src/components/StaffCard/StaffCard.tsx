import './staff-card/staff-card.scss';
import './staff-card/__container-for-avatar/staff-card__container-for-avatar.scss';

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
                    className='staff-card__avatar'
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