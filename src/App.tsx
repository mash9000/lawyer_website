import {Header} from "./components/Header/Header.tsx";
import {Button} from "./components/Button/Button.tsx";
import {requestACall} from "./data/request-a-call.ts";
import {baseLinks} from "./data/links.ts";

import './styles/our-service/our-service.scss';
import './styles/our-service/__desc/our-service__desc.scss';
import './styles/our-service/__service-box/our-service__service-box.scss';
import {
    PageSectionHeading
} from "./components/PageSectionHeading/PageSectionHeading.tsx";

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

                </div>
            </div>
        </>
    );
}