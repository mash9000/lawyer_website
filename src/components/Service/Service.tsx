import './service/service.scss';
import './service/service--hover.scss';
import './service/__icon/service__icon.scss';
import './service/__heading/service__heading.scss';
import './service/__description/service__description.scss';

import type {ServiceProps} from "./model/ServiceProps.ts";
import type {FC} from "react";

export const Service: FC<ServiceProps> = ({
                                              serviceName,
                                              serviceDescription
                                          }) => {
    return (
        <article className="service service--hover">
            <div className='service__icon'></div>
            <h3 className='service__heading'>{serviceName}</h3>
            <p className='service__description'>{serviceDescription}</p>
        </article>
    );
}