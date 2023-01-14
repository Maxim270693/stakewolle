import React from 'react';
import Header from "../Header/Header";
import Button from "../../components/Button/Button";
import SignUpForm from "../SignUpForm/SignUpForm";

import shark from '../../image/sharkSignUp.png';
import planet from '../../image/planetSignUp.png';
import meteorite from '../../image/meteoriteLeft.png';
import meteoriteBottom from '../../image/meteoriteBottom.png';
import meteoriteMiddle from '../../image/meteoriteMiddle.png';

import style from './SignUp.module.scss';
import Footer from "../Footer/Footer";

const SignUp = () => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <div className={style.container}>

                <div className={style.leftBlock}>
                    <h1 className={style.title}>Introduction to staking platform</h1>

                    <div className={style.text}>
                        Do you have any comments on how we can improve?
                        Share your ideas and thoughts about our products and services.
                    </div>

                    <div>
                        <img src={meteorite} alt="meteorite" className={style.meteorite}/>
                    </div>

                    <div>
                        <img src={planet} alt="planet" className={style.planet}/>
                    </div>

                    <div className={style.sharkBlock}>
                        <div>
                            <img src={shark} alt="shark"/>
                        </div>

                        <div>
                            <div className={style.text}>
                                Do you have any comments on how we can improve?
                                Share your ideas and thoughts about our products and services.
                            </div>
                            <Button>Watch video about the product</Button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={meteoriteMiddle} alt="meteoriteMiddle" className={style.meteoriteMiddle}/>
                </div>

                <div>
                    <img src={meteoriteBottom}
                         alt="meteoriteBottom"
                         className={style.meteoriteBottom}/>
                </div>

                <SignUpForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default SignUp;