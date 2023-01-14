import React, {ReactNode} from 'react';
import style from './Button.module.scss';
import classnames from 'classnames';

type ButtonPropsType = {
    type?: "button" | "submit" | "reset"
    children: ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
}

const Button = ({type, children, onClick, className, disabled}: ButtonPropsType) => {
    const onClickHandler = () => onClick?.()

    return (
        <button disabled={disabled}
                type={type}
                onClick={onClickHandler}
                className={classnames(style.btn, className)}
        >
            {children}
        </button>
    );
};

export default Button;