import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

import footerLogo from '../../image/footerLogo.png';

import style from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div style={{zIndex: '9', marginTop: '55px'}}>

                    <Button className={style.btn}>Stake now</Button>
                    <Button className={style.btnLogin}>Log in</Button>

                    <div className={style.footerLogo}>
                        <img src={footerLogo} alt="footerLogo"/>
                        <span className={style.footerLogoText}>Staking Rewards</span>
                        <span className={style.footerLogoTextItem}>Verified Provider</span>
                    </div>
                </div>

                <div style={{zIndex: '9'}}>
                    <Link to={''} className={style.footerTitle}>Networks</Link>
                    <Link to={''} className={style.footerText}>Working networks</Link>
                    <Link to={''} className={style.footerText}>Send a request</Link>
                </div>

                <div style={{zIndex: '9'}}>
                    <Link to={''} className={style.footerTitle}>Blog</Link>
                    <Link to={''} className={style.footerText}>Staking</Link>
                    <Link to={''} className={style.footerText}>Guides</Link>
                    <Link to={''} className={style.footerText}>Reviews</Link>
                    <Link to={''} className={style.footerText}>News</Link>
                </div>

                <div>
                    <Link to={''} className={style.footerTitle}>About us</Link>
                    <Link to={''} className={style.footerText}>Conditions</Link>
                    <Link to={''} className={style.footerText}>Team</Link>
                    <Link to={''} className={style.footerText}>Careers</Link>
                </div>
            </div>
        </div>
    );
};


export default Footer;