import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../../images/Logo_2.png';

export default class Header extends Component{
    expandMenu(){
        document.getElementById('nav-drop-down').classList.toggle("nav__dropdown--show")
    }

    render () {
        const links = ['Home', 'Plan', 'Play'];
        return (
            <div className="header">
                <div className="header__content">
                    <img className="header__image" src={Logo} alt='logo'></img>
                    <div className="header__content--left">
                        <ul className="nav hidden__mobile">
                            {links.map((item)=>{
                                return (
                                    <Link 
                                        className={"nav__item--link"
                                        + (this.props.active == item ? " nav__item--active" : '')} 
                                        to={"/"+(item != 'Home' ? item : '')}>
                                        {item}
                                    </Link>
                                );
                            })}
                        </ul>

                        <ul className="nav nav__dropdown hidden__tablet hidden__desktop">
                            <div className="nav__item">
                                <a className="nav__item--link" onClick={this.expandMenu}> Menu </a>
                            </div>
                            <div id="nav-drop-down" className="nav__dropdown--container">
                                {links.map((item)=>{
                                    return(
                                        <Link 
                                            className="nav__dropdown--link"
                                            to={"/"+(item != 'Home' ? item : '')}>
                                            {item}
                                        </Link>
                                    );
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="header__content--right">
                        <ul className="nav">
                            {/* <li className="nav__item" > */}
                                <Link className="nav__item--user-controls" to="/Login">Login</Link>
                            {/* </li> */}
                            {/* <li className="nav__item"> */}
                                <Link className="nav__item--user-controls" to="/Register">Register</Link>
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}