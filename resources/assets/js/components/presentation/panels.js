import React from 'react';

export function Panel(props) {
    return (
        <div className="panel">
            <h2>{props.title}</h2>
            <i className={"panel__icon fa " + props.icon}></i>
        </div>
    );
}