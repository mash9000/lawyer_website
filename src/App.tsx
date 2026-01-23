import type {ContentProps} from "./components/Content/model/ContentProps.ts";
import {Content} from "./components/Content/Content.tsx";

export const App = () => {
    const content: ContentProps = {
        imageSrc: '/images/news/e577d2cba4ef02d0dbd8482539ac3c6ea930c0f8.webp',
        heading: 'Воистину радостный звук: шёпот бессменных лидеров',
        publicationDate: new Date(2023, 3, 24),
        body: 'Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. '
    }

    return (
        <Content {...content}/>
    );
}