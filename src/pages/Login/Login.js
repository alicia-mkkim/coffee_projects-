import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.scss'

function Login() {
    return (
        <main className={styles.login}>
        <div className={styles.loginWrapper}>
            <h1 className={styles.logo}>Alicia</h1>
            <section className={styles.loginInputContainer}>
                <input  name="email" className={styles.email} type="text" placeholder="Enter your email" />
                <input  className={styles.password} type="password" placeholder="Password" />
            </section>     
            <button className={styles.loginBtn} type="submit" onClick={() => {}}>Login</button>
            <Link to="/" className={styles.forgetPW} >Forget Password?</Link>
        </div>
    </main>
    );
}

export default Login;
