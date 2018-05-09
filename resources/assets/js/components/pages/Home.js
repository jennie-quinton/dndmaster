import React from 'react';
import {Panel} from '../presentation/panels';

export function Home() {
    document.getElementById('home-link').classList.add('nav__item--active');

    return (
        <div className="content">
            <h1>Welcome to DND Master</h1>
            <p>The site which helps you build your DND campaign and helps you run a session.</p>
            <div>
                <Panel title="Plan" icon="fa-book"/>
                <Panel title="Play" icon="fa-play"/>
            </div>
        </div>
    );
}
