import {Header} from "./components/Header/Header.tsx";
import {Button} from "./components/Button/Button.tsx";
import {requestACall} from "./data/request-a-call.ts";
import {baseLinks} from "./data/links.ts";

import './styles/our-service/our-service.scss';
import './styles/our-service/__desc/our-service__desc.scss';
import './styles/our-service/__service-box/our-service__service-box.scss';

import './styles/about-us/about-us.scss';
import './styles/about-us/__content/about-us__content.scss';
import './styles/about-us/__heading/about-us__heading--blue-span.scss';
import './styles/about-us/__heading/about-us__heading.scss';
import './styles/about-us/__description/about-us__description.scss';
import './styles/about-us/__heading-and-description/about-us__heading-and-description.scss';
import './styles/about-us/__buttons/about-us__buttons.scss';
import './styles/about-us/__image/about-us__image.scss';
import './styles/our-lawyers/our-lawyers.scss';
import './styles/our-lawyers/__description/our-lawyers__description.scss';
import './styles/our-lawyers/__lawyers/our-lawyers__lawyers.scss';

import {
    PageSectionHeading
} from "./components/PageSectionHeading/PageSectionHeading.tsx";
import {services} from "./data/services.ts";
import type {ServiceProps} from "./components/Service/model/ServiceProps.ts";
import {Service} from "./components/Service/Service.tsx";
import {lawyers} from "./data/lawyers.ts";
import type {
    StaffCardProps
} from "./components/StaffCard/model/StaffCardProps.ts";
import {StaffCard} from "./components/StaffCard/StaffCard.tsx";
import {nanoid} from "nanoid";

export const App = () => {
    return (
        <>
            <Header contactTelephoneNumber='+7 (922) 022-94-82'
                    contactEmail='janis62@yahoo.com'
                    requestACall={requestACall}
                    baseLinks={baseLinks}>
                <div className='custom-style'>
                    <p className='custom-style__style-one'>оказываем весь
                        комплекс</p>
                    <h1 className='custom-style__style-two'>юридических
                        услуг</h1>
                    <p className='custom-style__style-three'>Давно выяснено, что
                        при
                        оценке дизайна и
                        композиции читаемый текст мешает сосредоточиться. Lorem
                        Ipsum
                        используют потому, что тот обеспечивает более или менее
                        стандартное заполнение.</p>
                    <Button title='Наши услуги'
                            functionPerformed={() => console.info('ссылка ведёт на какую-то страницу')}
                            additionalStylesForSomeReason={{height: '49px'}}/>
                </div>
            </Header>
            <div className='our-service'>
                <PageSectionHeading title='Наши услуги'/>
                <p className='our-service__desc'>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона
                </p>
                <div className='our-service__service-box'>
                    {services.map((service: ServiceProps) => (
                        <Service
                            key={service.serviceName}
                            serviceName={service.serviceName}
                            serviceDescription={service.serviceDescription}/>
                    ))}
                </div>
                <Button
                    title='все услуги'
                    functionPerformed={() => console.info('все услуги')}
                    additionalStylesForSomeReason={{marginTop: '48px'}}/>
            </div>
            <div className='about-us'>
                <div className='about-us__content'>
                    <div className='about-us__heading-and-description'>
                        <PageSectionHeading
                            title={
                                <>Юридическая компания <span
                                    className="about-us__heading--blue-span">правозащитник</span></>}
                            extraClass='about-us__heading'/>
                        <p className='about-us__description'>Давно выяснено, что
                            при
                            оценке дизайна и композиции читаемый текст мешает
                            сосредоточиться. Lorem Ipsum используют потому, что
                            тот
                            обеспечивает более или менее стандартное
                            заполнение.</p>
                        <p className='about-us__description'>Есть много
                            вариантов
                            Lorem Ipsum, но большинство из них имеет не всегда
                            приемлемые модификации, например, юмористические
                            вставки
                            или слова, которые даже отдалённо не напоминают
                            латынь.
                            Если вам нужен Lorem Ipsum для серьёзного проекта,
                            вы
                            наверняка не хотите какой-нибудь шутки, скрытой в
                            середине абзаца.</p>
                        <p className='about-us__description'>За прошедшие годы
                            текст
                            Lorem Ipsum получил много версий. Некоторые версии
                            появились по ошибке, некоторые - намеренно
                            (например,
                            юмористические варианты).</p>
                    </div>
                    <img
                        className='about-us__image'
                        src='/images/book.webp'
                        alt='изображение книги'/>
                    <div className='about-us__buttons'>
                        <Button title='История компании'
                                functionPerformed={() => console.info('история компании')}/>
                        <Button title='Сертификаты'
                                functionPerformed={() => console.info('сертификаты')}
                                additionalStylesForSomeReason={
                                    {
                                        backgroundColor: '#E6E6E6',
                                        color: '#222222',
                                        borderColor: '#E6E6E6'
                                    }}/>
                    </div>
                </div>
            </div>
            <div className='our-lawyers'>
                <PageSectionHeading title='Наши юристы'/>
                <p className='our-lawyers__description'>Давно выяснено, что при
                    оценке дизайна и композиции читаемый текст мешает
                    сосредоточиться. Lorem Ipsum используют потому, что тот
                    обеспечивает более или менее стандартное заполнение
                    шаблона</p>
                <div className='our-lawyers__lawyers'>
                    {lawyers.map((lawyer: StaffCardProps) => (
                        <StaffCard
                            key={nanoid()}
                            imageSrc={lawyer.imageSrc}
                            fullName={lawyer.fullName}
                            jobTitle={lawyer.jobTitle}
                            appeal={lawyer.appeal}
                            achievement={lawyer.achievement}/>))}
                </div>
            </div>
        </>
    );
}