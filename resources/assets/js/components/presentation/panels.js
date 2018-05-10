import React from 'react';
import {Link} from 'react-router-dom';

export function Panel(props) {
    return (
        <Link to={props.link} className="panel">
            <h2 className="panel__title">{props.title}</h2>
            <i className={"panel__icon fa " + props.icon}></i>
        </Link>
    );
}