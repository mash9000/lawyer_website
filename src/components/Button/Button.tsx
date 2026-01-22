import './button/button.scss';
import './button/button--hover.scss';
import './button/button--active.scss';

import type {ButtonProps} from "./model/ButtonProps.ts";
import type {FC} from "react";

export const Button: FC<ButtonProps> = ({
                                            title,
                                            parameters,
                                            functionPerformed
                                        }) => {
    const internalExecutableFunction = (parameters?: any[]) => {
        functionPerformed(parameters);
    }

    return (
        <button
            type='button'
            className='button button--hover button--active'
            onClick={() => internalExecutableFunction(parameters)}>{title}</button>
    )
}