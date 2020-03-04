import React from 'react';

const Icon = props => {
    const { name, color, size, className, onClick } = props;
    if (onClick) {
        return <a href="javascript:void(0);" onClick={onClick} ><i className={"fa " + "fa-" + name + " " + className} style={{ color: color, fontSize: size }} /></a>
    } else {
        return <i className={"fa " + "fa-" + name + " " + className} style={{ color: color, fontSize: size }} />
    }
    
}

export default Icon;