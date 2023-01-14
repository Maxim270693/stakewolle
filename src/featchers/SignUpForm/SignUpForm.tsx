import React, {ChangeEvent, FormEvent, useMemo, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
import {Checkbox} from "../../components/Checkbox/Checkbox";

import apple from '../../image/socialApple.png';
import google from '../../image/socialGoogle.png';
import faceBook from '../../image/socialFaceBook.png';

import userImg from '../../image/userForm.png';
import emailImg from '../../image/emailForm.png';
import passwordImg from '../../image/passwordForm.png';

import {InitialStateSignUpType, OnjType, RootStateType} from "../../types/types";
import {getEmail, getName, getPassword} from "../../bll/actions/signUpActions";

import style from './SignUpForm.module.scss';
import axios from "axios";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        username,
        email,
        password
    } = useSelector<RootStateType, InitialStateSignUpType>(state => state.signUp);


    const checkBoxList: Array<OnjType> = [
        {order: 0, name: 'I agree to Terms of service', checked: false},
        {order: 1, name: 'Subscribe to the Newsletter', checked: false},
    ]
    const [checkBoxes, setCheckBoxes] = useState(checkBoxList)

    const isVerified = useMemo(() => {
        return checkBoxes.every((checkBox) => checkBox.checked && username && email && password);
    }, [checkBoxes, username, email, password]);


    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getName(event.target.value))
    }
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getEmail(event.target.value))
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getPassword(event.target.value))
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await axios.post("/register", {
                username,
                email,
                password,
                checkedAgree: checkBoxes[0].checked,
                checkedSubscribe: checkBoxes[1].checked
            })
            if (response && response.status === 201) {
                alert('Вы зарегистрированны!')
                navigate('/login')
            }
        } catch (e) {
            alert('Упс, что-то пошло не так :(')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <h2 className={style.title}>Create your account</h2>

            <div className={style.text}>
                Already have an account?
                <Link to='/Login' className={style.textItem}>
                    Log in
                </Link>
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

            <div>
                {checkBoxes.map((checkBox, index) => (
                    <div key={index} className={style.checked}>
                        <Checkbox
                            checkBox={checkBox}
                            onChange={(item: OnjType) => {
                                setCheckBoxes(checkBoxes.map((d) => (d.order === item.order ? item : d)));
                            }}
                        />
                    </div>
                ))}
            </div>

            <Button type="submit" disabled={!isVerified}
                    className={!isVerified ? style.disabled : style.btn}>
                Create account
            </Button>

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