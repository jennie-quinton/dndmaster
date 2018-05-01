import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../../images/Logo_2.png';

export default function Header(){
    return (
        <div className="header">
            <div className="header__content">
                <img className="header__image" src={Logo} alt='logo'></img>
                <div className="header__content--left">
                    <Link className="header__nav" to="/">Home</Link>
                    <Link className="header__nav" to="/plan">Plan</Link>
                    <Link className="header__nav" to="/play">Play</Link>
                </div>
                <div className="header__content--right">
                    <Link className="header__nav" to="/login">Login</Link>
                    <Link className="header__nav" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
}