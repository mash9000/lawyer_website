import './burger-menu/burger-menu.scss';
import './burger-menu/burger-menu--open.scss';
import './burger-menu/__button-close/burger-menu__button-close.scss';
import './burger-menu/__link/burger-menu__link.scss';
import './burger-menu/__link/burger-menu__link--hover.scss';

import type {BurgerMenuProps} from "./model/BurgerMenuProps.ts";
import type {FC} from "react";

export const BurgerMenu: FC<BurgerMenuProps> = ({
                                                    links,
                                                    condition,
                                                    closeMenuFunction
                                                }) => {
    return (
        <nav className={`burger-menu ${condition ? 'burger-menu--open' : ''}`}>
            <button
                type='button'
                className='burger-menu__button-close'
                onClick={() => closeMenuFunction()}></button>
            {links.map((link: { text: string, link: URL }) => (
                <a key={link.text}
                   href={link.link.href}
                   className='burger-menu__link burger-menu__link--hover'
                   target='_blank'>{link.text}</a>
            ))}
        </nav>
    );
}