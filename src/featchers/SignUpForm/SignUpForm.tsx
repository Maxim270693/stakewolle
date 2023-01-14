import React, {ChangeEvent, FormEvent} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";

import apple from '../../image/socialApple.png';
import google from '../../image/socialGoogle.png';
import faceBook from '../../image/socialFaceBook.png';

import userImg from '../../image/userForm.png';
import emailImg from '../../image/emailForm.png';
import passwordImg from '../../image/passwordForm.png';

import style from './SignUpForm.module.scss';
import {InitialStateSignUpType, RootStateType} from "../../types/types";
import {getEmail, getName, getPassword} from "../../bll/actions/signUpActions";
import classnames from "classnames";

const SignUpForm = () => {
    const dispatch = useDispatch();

    const {
        username,
        email,
        password
    } = useSelector<RootStateType, InitialStateSignUpType>(state => state.signUp);

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getName(event.target.value))
    }
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getEmail(event.target.value))
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getPassword(event.target.value))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <h2 className={style.title}>Create your account</h2>

            <div className={style.text}>
                Already have an account? <Link to='/Login' className={style.textItem}>Log in</Link>
            </div>

            <InputForm
                type="text"
                placeholder="User"
                image={userImg}
                alt="User"
                name='username'
                value={username}
                onChange={onChangeUsername}
            />
            <InputForm
                type="text"
                placeholder="Email"
                image={emailImg}
                alt="Email"
                name='email'
                value={email}
                onChange={onChangeEmail}
            />
            <InputForm
                type="text"
                placeholder="Password"
                image={passwordImg}
                alt="Password"
                name="password"
                value={password}
                onChange={onChangePassword}
            />

            <div className={classnames(style.checked, style.checkedItem)}>
                <input type="checkbox"
                       className={style.inputChecked}
                />
                <span className={style.text}>I agree to Terms of service</span>
            </div>
            <div className={style.checked}>
                <input type="checkbox"
                       className={style.inputChecked}
                />
                <span className={style.text}>Subscribe to the Newsletter</span>
            </div>

            <Button type="submit" className={style.btn}>Create account</Button>

            <div className={style.footerText}>Or sign in with socials</div>

            <div>
                <img src={google} alt="google" className={style.footerImg}/>
                <img src={faceBook} alt="faceBook" className={style.footerImg}/>
                <img src={apple} alt="apple" className={style.footerImg}/>
            </div>
        </form>
    );
};

export default SignUpForm;