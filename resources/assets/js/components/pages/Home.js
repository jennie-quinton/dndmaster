import React from 'react';
import Header from '../core/Header';

export function Home() {
    document.getElementById('home-link').classList.add('nav__item--active');
    return (
        <div>
            <div className="content">
                <h1>DND Master</h1>
            </div>
        </div>
    );
}
