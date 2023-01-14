import React, {ReactNode} from 'react';
import style from './Button.module.scss';
import classnames from 'classnames';

type ButtonPropsType = {
    type?: "button" | "submit" | "reset"
    children: ReactNode
    onClick?: () => void
    className?: string
}

const Button = ({type, children, onClick, className}: ButtonPropsType) => {
    const onClickHandler = () => onClick?.()

    return (
        <button type={type} onClick={onClickHandler} className={classnames(style.btn, className)}>{children}</button>
    );
};

export default Button;