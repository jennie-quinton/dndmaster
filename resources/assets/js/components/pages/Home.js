import React from 'react';
import {Panel} from '../presentation/panels';

export function Home() {
    document.getElementsByClassName('nav__item--active')[0] != undefined ? 
        document.getElementsByClassName('nav__item--active')[0].classList.remove('nav__item--active') : 
        null;
    document.getElementById('home-link').classList.add('nav__item--active');

    return (
        <div className="content">
            <h1>Welcome to DND Master</h1>
            <p>The site which helps you build your DND campaign and helps you run a session.</p>
            <div className="grid__2">
                <Panel title="Plan" link ='/plan' icon="fa-book"/>
                <Panel title="Play" link ='/play' icon="fa-play"/>
            </div>
        </div>
    );
}
