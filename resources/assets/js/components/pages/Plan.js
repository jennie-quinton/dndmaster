import React from 'react';

export function Plan() {
    document.getElementsByClassName('nav__item--active')[0] != undefined ? 
        document.getElementsByClassName('nav__item--active')[0].classList.remove('nav__item--active') : 
        null;
    document.getElementById('plan-link').classList.add('nav__item--active');
    
    return (
        <div>
            <div className="content">
                <h1>Plan</h1>
            </div>
        </div>
    );
}
