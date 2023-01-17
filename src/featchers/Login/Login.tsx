import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";

import shark from '../../images/sharkLogin.png';
import planet from '../../images/planetSignUp.png';
import meteorite from '../../images/meteoriteLeft.png';
import meteoriteMiddle from '../../images/meteoriteMiddle.png';
import meteoriteBottom from '../../images/meteoriteBottom.png';

import style from './Login.module.scss';

const Login = () => {

    return (
        <div className={style.wrapper}>
            <Header/>
            <LoginForm/>

            <div>
                <img src={planet} alt="planet" className={style.planet}/>
            </div>

            <div>
                <img src={meteorite} alt="meteorite" className={style.meteorite}/>
            </div>

            <div>
                <img src={meteoriteMiddle} alt="meteoriteMiddle" className={style.meteoriteMiddle}/>
            </div>

            <div>
                <img src={shark} alt="shark" className={style.shark}/>
                <img src={meteoriteBottom} alt="meteoriteBottom" className={style.meteoriteBottom}/>
            </div>

            <Footer/>
        </div>
    );
};

export default Login;