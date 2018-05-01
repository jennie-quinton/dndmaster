import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../../images/Logo_2.png';

export default function Header(props){
    return (
        <div className="header">
            <div className="header__content">
                <img className="header__image" src={Logo} alt='logo'></img>
                <div className="header__content--left">
                    <ul className="nav">
                        <li className={"nav__item" + (props.active == 'home'? " nav__item--active" :'')}>
                            <Link className="nav__item--link nav__item--link-first" to="/">Home</Link>
                        </li>
                        <li className={"nav__item" + (props.active == 'plan'? " nav__item--active" :'')} >
                            <Link className="nav__item--link" to="/plan">Plan</Link>
                        </li>
                        <li className={"nav__item" + (props.active == 'play'? " nav__item--active" :'')}>
                            <Link className="nav__item--link nav__item--link-last" to="/play">Play</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__content--right">
                    <ul className="nav">
                        <li className="nav__item nav__item--user-controls" >
                            <Link className="nav__item--link nav__item--link-first" to="/login">Login</Link>
                        </li>
                        <li className="nav__item nav__item--user-controls">
                            <Link className="nav__item--link nav__item--link-last" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}