import React, {useState} from 'react';

import logo from '../../images/logo.png'
import vector from '../../images/vector.png'
import arrowBottom from '../../images/arrowBottom.png'
import headerPresent from '../../images/headerPresent.png'

import style from './Header.module.scss';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

const Header = () => {
    const [language, setLanguage] = useState('EN')

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={logo} alt="logo"/>
                </div>

                <div className={style.navigate}>
                    <ul className={style.navigate_block}>
                        <Link to={'/AboutUs'}>About us</Link>
                        <Link to={'/Blog'}>Blog</Link>
                        <li>
                            <img src={vector} alt="vector" className={style.vector}/>
                            <span className={style.language}>{language}</span>
                            <img src={arrowBottom} alt="arrowBottom" className={style.arrowBottom}/>
                        </li>
                    </ul>
                </div>

                <div className={style.btnWrapper}>
                    <Button onClick={() => {}}>Staking platform</Button>
                    <img src={headerPresent} alt="headerPresent" className={style.headerPresent}/>
                </div>
            </div>
        </div>
    );
};

export default Header;