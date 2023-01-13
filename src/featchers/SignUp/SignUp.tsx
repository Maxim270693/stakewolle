import React from 'react';
import Header from "../Header/Header";

import style from './SignUp.module.scss';

const SignUp = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <div className={style.container}>
                <h1 className={style.title}>Introduction to staking platform</h1>
            </div>
        </div>
    );
};

export default SignUp;