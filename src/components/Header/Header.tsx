import './header/header.scss';
import './header/__nav/header__nav.scss';
import './header/__nav/__communication-unit/header__nav__communication-unit.scss';
import './header/__nav/__base-links/header__nav__base-links.scss';
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
                    <a className='header__nav__communication-unit--telephoneNumber'
                       href={`tel:${contactTelephoneNumber}`}>{contactTelephoneNumber}</a>
                    <a className='header__nav__communication-unit--contactEmail'
                       href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    <button type='button' className=''
                            onClick={() => requestACall.actionBeingPerformed()}>{requestACall.text}</button>
                </div>
                <div className='header__nav__base-links'>
                    <a className='header__nav__base-lins--logo'
                       href='http://localhost:5173/'
                       target="_self">
                        <h6>правозащитник</h6>
                        <span>юридическая компания</span>
                    </a>
                    {baseLinks.map((link: { text: string, link: URL }) => (
                        <a key={link.text}
                           href={link.link.href}
                           className='header__nav__base-lins--nav header__nav__base-lins--nav--hover'
                           target='_blank'>{link.text}</a>
                    ))}
                </div>
            </nav>
            <div className='header__main-information'>
                {children}
            </div>
        </header>
    );
}