import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.scss'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [ inputs , setInputs ] = useState({
        email : "",
        password: "",
    });

    const { email, password } = inputs;
    const { onSubmit , setOnSubmit } = useState('')

    const handleInput = (event) => {  
        const { value , name } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

        console.log(inputs)
    }

    const goToMain = (data) => {

        data.email.includes('@') && data.password.length >= 7? navigate('/main') : alert('이메일형식에 @가 들어가있나요? / 비밀번호 7자이상인가요?')
    }


    return (
        <main className={styles.login}>
        <div className={styles.loginWrapper}>
            <h1 className={styles.logo}>Alicia</h1>
            <section className={styles.loginInputContainer}>
                <input  onChange={handleInput} value={email || ""} name="email" className={styles.email} type="text" placeholder="Enter your email" />
                <input  onChange={handleInput} value={password} name="password" className={styles.password} type="password" placeholder="Password" />
            </section>     
            <button className={styles.loginBtn} type="submit" onClick={() => {goToMain(inputs)}}>Login</button>
            <Link to="/" className={styles.forgetPW} >Forget Password?</Link>
        </div>
    </main>
    );
}

export default Login;
