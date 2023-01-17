import React, {ChangeEvent, FormEvent, useMemo, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getName, getPassword} from "../../bll/actions/signUpActions";

import Form from "../Form/Form";
import InputForm from "../../components/InputForm/InputForm";

import userImg from "../../images/userForm.png";
import passwordImg from "../../images/passwordForm.png";

import {InitialStateSignUpType, OnjType, RootStateType} from "../../types/types";
import axios from "axios";
import style from './LoginForm.module.scss';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        username,
        password
    } = useSelector<RootStateType, InitialStateSignUpType>(state => state.signUp);


    const checkBoxList: Array<OnjType> = [
        {order: 0, name: 'Remember me', checked: false},
    ]
    const [checkBoxes, setCheckBoxes] = useState(checkBoxList)

    const isVerified = useMemo(() => {
        return checkBoxes.every((checkBox) => checkBox.checked && username && password);
    }, [checkBoxes, username, password]);


    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getName(event.target.value))
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(getPassword(event.target.value))
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await axios.post("/login", {
                username,
                password,
                checkedAgree: checkBoxes[0].checked,
            })
            if (response && response.status === 201) {
                alert('Добро пожаловать :)')
                navigate('/')
            }
        } catch (e) {
            alert('Упс, что-то пошло не так :(')
        }
    }

    return (
        <div className={style.wrapper}>
            <Form onSubmit={handleSubmit}
                  title="Log in"
                  text="Don’t have an account?"
                  link="SignUp"
                  checkBoxes={checkBoxes}
                  setCheckBoxes={setCheckBoxes}
                  buttonName="Log in"
                  isVerified={isVerified}
                  className={style.form}
            >

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
                    placeholder="Password"
                    image={passwordImg}
                    alt="Password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                />

                <div className={style.footerText}>Forgot Username / Password?</div>

            </Form>
        </div>
    );
};

export default LoginForm;