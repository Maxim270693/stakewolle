import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import Header from "./featchers/Header/Header";

import {RootStateType} from "./types/types";
import './App.scss';
import {isRegisterAC} from "./bll/actions/signUpActions";

function App() {
    const navigate = useNavigate();
    const isRegister = useSelector<RootStateType, boolean>(state => state.signUp.isRegister)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isRegister) {
            navigate('/SignUp')
        }
    }, [isRegister]);

    return (
        <div className="App">
            <Header/>
            <button style={{color: '#000'}}
                    onClick={() => dispatch(isRegisterAC(false))}
            >
                log off
            </button>
            hi
        </div>
    );
}

export default App;
