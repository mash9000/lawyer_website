import './service/service.scss';
import type {ServiceProps} from "./model/ServiceProps.ts";
import type {FC} from "react";

export const Service: FC<ServiceProps> = ({
                                              serviceName,
                                              serviceDescription
                                          }) => {
    return (
        <article className="service">
            <h3 className='service__heading'>{serviceName}</h3>
            <p className='service__description'>{serviceDescription}</p>
        </article>
    );
}