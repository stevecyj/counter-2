import React, { Component,PureComponent } from 'react';

// PureComponent
class ProgressBar extends PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="bar-inner" style={{ width: `${value}%` }}>
                <span>{value}%</span>
            </div>
        );
    }

// class component
class ProgressBar extends Component {
    render() {
        const { value } = this.props;
        return (
            <div className="bar-inner" style={{ width: `${value}%` }}>
                <span>{value}%</span>
            </div>
        );
    }
}

// functional component
const ProgressBar = props => {
    const { value } = props;
    render();
    return (
        <div className="bar-inner" style={{ width: `${value}%` }}>
            <span>{value}%</span>
        </div>
    );
};

export default ProgressBar;
