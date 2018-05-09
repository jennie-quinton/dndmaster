import React from 'react';

export function Home() {
    document.getElementById('home-link').classList.add('nav__item--active');

    return (
        <div className="content">
            <h1>Welcome to DND Master</h1>
            <p>The site which helps you build your DND campaign and helps you run a session.</p>
            <div>
                <div>
                    Plan
                    <i className="fa fa-book"></i>
                </div>
                <div>
                    Play
                    <i className="fa fa-play"></i>
                </div>
            </div>
        </div>
    );
}
