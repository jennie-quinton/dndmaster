import React from 'react';
import Header from '../core/Header';

export function Home() {
    return (
        <div>
            <Header active="Home"/>
            <div className="content">
                <h1>DND Master</h1>
            </div>
        </div>
    );
}
