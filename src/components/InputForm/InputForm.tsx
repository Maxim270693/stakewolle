import React, {ChangeEvent, useState} from 'react';

import style from "./InputForm.module.scss";

type InputFormPropsType = {
    type: string
    placeholder?: string
    image?: string
    alt?: string
    name?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void

}

const InputForm = ({type, placeholder, image, alt, name, value, onChange}: InputFormPropsType) => {

    return (
        <div className={style.wrapper}>
            <input type={type}
                   placeholder={placeholder}
                   className={style.input}
                   value={value}
                   onChange={onChange}
                   name={name}
            />
            <img src={image} alt={alt} className={style.userImg}/>
        </div>
    );
};

export default InputForm;