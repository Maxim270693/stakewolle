import React, {FormEvent, ReactNode} from 'react';
import {Link} from "react-router-dom";

import Button from "../../components/Button/Button";
import {Checkbox} from "../../components/Checkbox/Checkbox";

import apple from "../../images/socialApple.png";
import google from "../../images/socialGoogle.png";
import faceBook from "../../images/socialFaceBook.png";

import {OnjType} from "../../types/types";
import classNames from "classnames";
import style from './Form.module.scss';

type FormPropsType = {
    children: ReactNode
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    title: string
    text?: string
    link?: string
    className?: string
    checkBoxes?: Array<OnjType>
    setCheckBoxes?: (checkBoxes: Array<OnjType>) => void
    buttonName?: string
    isVerified?: boolean
}

const Form = ({
                  children,
                  onSubmit,
                  title,
                  text,
                  link,
                  className,
                  checkBoxes,
                  setCheckBoxes,
                  buttonName,
                  isVerified
              }: FormPropsType) => {

    return (
        <form onSubmit={onSubmit} className={classNames(style.wrapper, className)}>
            <h2 className={style.title}>{title}</h2>

            <div className={style.text}>
                {text}
                <Link to={`/${link}`} className={style.textItem}>
                    {link}
                </Link>
            </div>

            {children}

            <div>
                {checkBoxes?.map((checkBox, index) => (
                    <div key={index} className={style.checked}>
                        <Checkbox
                            checkBox={checkBox}
                            onChange={(item: OnjType) => {
                                setCheckBoxes?.(checkBoxes?.map((d) => (d.order === item.order ? item : d)));
                            }}
                        />
                    </div>
                ))}
            </div>

            {
                buttonName
                && <Button type="submit" disabled={!isVerified}
                           className={!isVerified ? style.disabled : style.btn}
                >
                    {buttonName}
                </Button>
            }

            <div className={style.footerText}>Or sign in with socials</div>

            <div>
                <img src={google} alt="google" className={style.footerImg}/>
                <img src={faceBook} alt="faceBook" className={style.footerImg}/>
                <img src={apple} alt="apple" className={style.footerImg}/>
            </div>
        </form>
    );
};

export default Form;