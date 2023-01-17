import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import Header from "./featchers/Header/Header";

import {RootStateType} from "./types/types";
import './App.scss';

function App() {
    const navigate = useNavigate();
    const isRegister = useSelector<RootStateType, boolean>(state => state.signUp.isRegister)

    useEffect(() => {
        if (!isRegister) {
            navigate('/SignUp')
        }
    }, []);

    return (
        <div className="App">
            <Header/>
            hi
        </div>
    );
}

export default App;
