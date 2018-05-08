import React from 'react';

export function Play() {
    document.getElementById('play-link').classList.add('nav__item--active');
    return (
        <div>
            <div className="content">
                <h1>Play</h1>
            </div>
        </div>
    );
}
