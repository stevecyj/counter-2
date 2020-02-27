import React, { Component, createRef } from 'react';

class Input extends Component {
    myInput = createRef();

    componentDidMount() {
        this.myInput.current.focus();
    }

    setRef = input => {
        this.myInput = input;
    };
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                <input text="text" ref={this.myInput} />
            </div>
        );
    }
}

export default Input;
