import React from 'react';

export function Plan() {
    document.getElementById('plan-link').classList.add('nav__item--active');
    return (
        <div>
            <div className="content">
                <h1>Plan</h1>
            </div>
        </div>
    );
}
