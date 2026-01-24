import './header/header.scss';
import './header/__nav/header__nav.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit.scss';
import './header/__nav/__communication-unit/__inner-block/__request-a-call/header__nav__communication-unit__inner-block__request-a-call.scss';
import './header/__nav/__communication-unit/__inner-block/__telephone-number/header__nav__communication-unit__inner-block__telephone-number.scss';
import './header/__nav/__communication-unit/__inner-block/__contact-email/header__nav__communication-unit__inner-block__contact-email.scss';
import './header/__nav/__communication-unit/__inner-block/header__nav__communication-unit__inner-block.scss';
import './header/__nav/__base-links/header__nav__base-links.scss';
import './header/__nav/__base-links/__inner-block/header__nav__base-links__inner-block.scss';
import './header/__nav/__base-links/__inner-block/__logo/header__nav__base-links__inner-block__logo.scss';
import './header/__nav/__base-links/__inner-block/__link/header__nav__base-links__inner-block__link.scss';
import './header/__nav/__base-links/__inner-block/__link/header__nav__base-links__inner-block__link--hover.scss';
import './header/__nav/__base-links/__inner-block/__burger-menu/header__nav__base-links__inner-block__burger-menu.scss';

import './custom-style/custom-style.scss';
import './custom-style/__style-one/custom-style__style-one.scss';
import './custom-style/__style-two/custom-style__style-two.scss';
import './custom-style/__style-three/custom-style__style-three.scss';

import type {HeaderProps} from "./model/HeaderProps.ts";
import type {FC} from "react";

export const Header: FC<HeaderProps> = ({
                                            contactTelephoneNumber,
                                            contactEmail,
                                            requestACall,
                                            baseLinks,
                                            children
                                        }) => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__nav__communication-unit'>
                    <div className='header__nav__communication-unit__inner-block'>
                        <a className='header__nav__communication-unit__inner-block__telephone-number'
                           href={`tel:${contactTelephoneNumber}`}>{contactTelephoneNumber}</a>
                        <a className='header__nav__communication-unit__inner-block__contact-email'
                           href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        <button type='button'
                                className='header__nav__communication-unit__inner-block__request-a-call'
                                onClick={() => requestACall.actionBeingPerformed()}>{requestACall.text}</button>
                    </div>
                </div>
                <div className='header__nav__base-links'>
                    <div className='header__nav__base-links__inner-block'>
                        <a className='header__nav__base-links__inner-block__logo'
                           href='http://localhost:5173/'
                           target="_self">
                            <h6>правозащитник</h6>
                            <span>юридическая компания</span>
                        </a>
                        {baseLinks.map((link: { text: string, link: URL }) => (
                            <a key={link.text}
                               href={link.link.href}
                               className='header__nav__base-links__inner-block__link header__nav__base-links__inner-block__link--hover'
                               target='_blank'>{link.text}</a>
                        ))}
                        <div className='header__nav__base-links__inner-block__burger-menu'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='header__main-information'>
                {children}
            </div>
        </header>
    );
}