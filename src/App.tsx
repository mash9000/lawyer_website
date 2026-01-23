import {Header} from "./components/Header/Header.tsx";
import {Button} from "./components/Button/Button.tsx";

export const App = () => {
    const requestACall = {
        text: 'Заказать звонок',
        actionBeingPerformed: () => console.info('звонок заказан')
    }

    const baseLinks = [
        {
            text: 'Услуги',
            link: new URL('http://localhost:5173/')
        },
        {
            text: 'О компании',
            link: new URL('http://localhost:5173/')
        },
        {
            text: 'Наши юристы',
            link: new URL('http://localhost:5173/')
        },
        {
            text: 'Отзывы',
            link: new URL('http://localhost:5173/')
        },
        {
            text: 'Новости',
            link: new URL('http://localhost:5173/')
        },
        {
            text: 'Контакты',
            link: new URL('http://localhost:5173/')
        },
    ];

    return (
        <Header contactTelephoneNumber='89999999999'
                contactEmail='zhena@zhizni.net'
                requestACall={requestACall}
                baseLinks={baseLinks}>
            <p className='style-one'>оказываем весь комплекс</p>
            <h1 className='style-two'>юридических услуг</h1>
            <p className='style-three'>Давно выяснено, что при оценке дизайна и
                композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
                используют потому, что тот обеспечивает более или менее
                стандартное заполнение.</p>
            <Button title='Наши услуги'
                    functionPerformed={() => console.info('ссылка ведёт на какую-то страницу')}/>
        </Header>
    );
}