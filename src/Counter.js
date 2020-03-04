import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

const Counter = () => {
    // static defaultProps = {
    //     initCount: 5
    // };

    // static propTypes = {
    //     initCount: PropTypes.number
    // };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: props.initCount
    //     };
    // }
    // state = {
    //     count: 0
    // };

    // addCount = () => {
    //     this.setState(state => ({
    //         count: state.count + 1
    //     }));

    //     this.setState(state => ({
    //         count: state.count + 1
    //     }));

    //     this.setState(state => ({
    //         count: state.count + 1
    //     }));
    // };

    const [count, setCount] = useState(0);
    const addCount = () => {
        // setCount(count + 1);
        setCount(c => c + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>+1</button>
        </div>
    );
};

// Counter.defaultProps = {
//     initCount: 5
// };

// Counter.propTypes = {
//     initCount: PropTypes.number
// };

export default Counter;
