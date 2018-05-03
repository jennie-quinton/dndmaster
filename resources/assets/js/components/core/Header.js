import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../../images/Logo_2.png';

export default class Header extends Component{
    expandMenu(){
        console.log('here');
    }

    render () {
        return (
            <div className="header">
                <div className="header__content">
                    <img className="header__image" src={Logo} alt='logo'></img>
                    <div className="header__content--left">
                        <ul className="nav">
                            <li className="nav__item hidden__tablet hidden__desktop">
                                <a className="nav__item--menu" onClick={this.expandMenu}> Menu </a>
                            </li>
                            <li className="nav__item" >
                                <Link 
                                    className={"nav__item--link nav__item--first" + (this.props.active == 'home' ? " nav__item--active" : '')} 
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item" >
                                <Link 
                                    className={"nav__item--link" + (this.props.active == 'plan' ? " nav__item--active" : '')} 
                                    to="/plan">
                                    Plan
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link 
                                    className={"nav__item--link nav__item--last" + (this.props.active == 'play' ? " nav__item--active" : '')} 
                                    to="/play">
                                    Play
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__content--right">
                        <ul className="nav">
                            <li className="nav__item" >
                                <Link className="nav__item--user-controls nav__item--first" to="/login">Login</Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__item--user-controls nav__item--last" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}