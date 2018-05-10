import React from 'react';

export function Play() {
    document.getElementsByClassName('nav__item--active')[0] != undefined ? 
        document.getElementsByClassName('nav__item--active')[0].classList.remove('nav__item--active') : 
        null;
    document.getElementById('play-link').classList.add('nav__item--active');
    return (
        <div>
            <div className="content">
                <h1>Play</h1>
            </div>
        </div>
    );
}
