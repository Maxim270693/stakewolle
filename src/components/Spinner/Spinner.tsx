import React from 'react';

import style from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={style.ldsCss}>
            <div className={style.ldsDoubleRing}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;