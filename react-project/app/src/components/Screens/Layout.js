import React from 'react';
import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
    render() {
        return <div className="layout">
            {this.props.children}
        </div>
    }
}

export default withRouter(Layout);