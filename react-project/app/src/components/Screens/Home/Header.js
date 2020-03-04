import React from 'react';
import Icon from '../../Widgets/Icon';

const Header = props => {
    const { onDownClick } = props;
    return <header className="headerContainer">
        <h5 className="smallTitle">Space Savvy</h5>
        <h1 className="appTitle">Discover Space Missions</h1>
        <Icon name="chevron-down" color="white" size={24} className="arrowDown" onClick={onDownClick} />
    </header>
}

export default Header;