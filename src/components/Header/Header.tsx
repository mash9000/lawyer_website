import './header/header.scss';
import './header/__nav/header__nav.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit--requestACall.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit--telephoneNumber.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit--contactEmail.scss';
import './header/__nav/__communication-unit/__inner-block/header__nav__communication-unit__inner-block.scss';
import './header/__nav/__base-links/header__nav__base-links.scss';
import './header/__nav/__base-links/__inner-block/header__nav__base-links__inner-block.scss';
import './header/__nav/__base-links/__inner-block/header__nav__base-links--logo.scss';
import './header/__nav/__base-links/__inner-block/header__nav__base-links--nav.scss';
import './header/__nav/__base-links/__inner-block/header__nav__base-links--nav--hover.scss';

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
                        <a className='header__nav__communication-unit--telephoneNumber'
                           href={`tel:${contactTelephoneNumber}`}>{contactTelephoneNumber}</a>
                        <a className='header__nav__communication-unit--contactEmail'
                           href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        <button type='button' className='header__nav__communication-unit--requestACall'
                                onClick={() => requestACall.actionBeingPerformed()}>{requestACall.text}</button>
                    </div>
                </div>
                <div className='header__nav__base-links'>
                    <div className='header__nav__base-links__inner-block'>
                        <a className='header__nav__base-links--logo'
                           href='http://localhost:5173/'
                           target="_self">
                            <h6>правозащитник</h6>
                            <span>юридическая компания</span>
                        </a>
                        {baseLinks.map((link: { text: string, link: URL }) => (
                            <a key={link.text}
                               href={link.link.href}
                               className='header__nav__base-links--nav header__nav__base-links--nav--hover'
                               target='_blank'>{link.text}</a>
                        ))}
                    </div>
                </div>
            </nav>
            <div className='header__main-information'>
                {children}
            </div>
        </header>
    );
}