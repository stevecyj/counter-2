import React, { Component } from 'react';

class Input extends Component {
    componentDidMount() {
        this.myInput.focus();
    }

    setRef = input => {
        this.myInput = input;
    };
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                <input text="text" ref={this.setRef} />
            </div>
        );
    }
}

export default Input;
