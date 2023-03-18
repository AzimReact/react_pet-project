import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form action="">
                <MyInput type="text" placeholder='enter login'/>
                <MyInput type="text" placeholder='enter password'/>
                <MyButton >Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;