import React from "react";
import {OnjType} from "../../types/types";

import style from "../../featchers/SignUpForm/SignUpForm.module.scss";

type CheckboxType = {
    checkBox: any
    onChange: (checkBox: OnjType) => void
}

export const Checkbox = ({checkBox, onChange}: CheckboxType) => {
    return (
        <>
            <input
                type="checkbox"
                id={Date.now().toString()}
                name={checkBox.name}
                value={checkBox.checked}
                onChange={() => onChange({...checkBox, checked: !checkBox.checked})}
                className={style.inputChecked}
            />
            <span className={style.text}>{checkBox.name}</span>
        </>
    );
};