import React, {ChangeEvent, FormEvent, useMemo, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import InputForm from "../../components/InputForm/InputForm";
import Form from "../Form/Form";

import userImg from '../../images/userForm.png';
import emailImg from '../../images/emailForm.png';
import passwordImg from '../../images/passwordForm.png';

import {InitialStateSignUpType, OnjType, RootStateType} from "../../types/types";
import {getEmail, getName, getPassword, isRegisterAC} from "../../bll/actions/signUpActions";
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
                dispatch(isRegisterAC(true))
                alert('Вы зарегистрированны!')
                navigate('/login')
            }
        } catch (e) {
            alert('Упс, что-то пошло не так :(')
        }
    }

    return (
        <Form onSubmit={handleSubmit}
              title="Create your account"
              buttonName="Create account"
              link="Login"
              checkBoxes={checkBoxes}
              setCheckBoxes={setCheckBoxes}
              text="Already have an account?"
              isVerified={isVerified}
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
        </Form>
    );
};

export default SignUpForm;