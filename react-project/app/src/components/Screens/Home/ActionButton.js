import React from 'react';

const ActionButton = props => {
    const { title, url, style } = props;
    return <a href={url} target="_blank" className="btn actionButton" style={style}>{title}</a>
}

export default ActionButton;