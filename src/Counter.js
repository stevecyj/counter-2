import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    // static defaultProps = {
    //     initCount: 5
    // };

    // static propTypes = {
    //     initCount: PropTypes.number
    // };
    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount
        };
    }
    state = {
        count: 0
    };

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>+1</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    initCount: 5
};

Counter.propTypes = {
    initCount: PropTypes.number
};

export default Counter;
