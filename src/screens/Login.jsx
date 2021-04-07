import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { login } from '../stores/user';
import { Alert } from '@material-ui/lab';
import { useHistory } from "react-router-dom";

const Content = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
    color: #d7d7d7;
`;

function Login() {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const onSubmit = async(data) => {
        try {
            setMessage("");
            await login(data.username, data.password);
            history.push("/admin/dashboard");
            window.location.reload();
            
        } catch(err) {
            setMessage("Login Error");
        }
    }
    

    return (
        <>
            {message && (
                    <Alert severity="error">{message}</Alert>
                )}
            <Content>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3 text-center">
                        <h1>清華大學藝術中心</h1>
                        <h1>後台管理系統</h1>
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="text" placeholder="username" {...register("username", {required: true, max: 30, min: 6, maxLength: 30})} />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="password" placeholder="password" {...register("password", {required: true, max: 30, min: 6, maxLength: 30})} />
                    </div>
                    <button class="btn btn-lg btn-block btn-info" type="submit">登入</button>
                </form>
            </Content>
        </>
    )
}


export default Login