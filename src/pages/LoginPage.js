import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login">
            <label htmlFor="">Podaj login: <input type="text" placeholder="login" />
            </label>
            <label htmlFor="">Podaj hasło: <input type="password" placeholder="hasło" /></label>
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;
