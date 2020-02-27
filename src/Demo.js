import React, { Component } from 'react';
import eunha from './eunha.jpg';
import './style.css';

class Demo extends Component {
    state = {
        visible: true
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        const { visible } = this.state;
        const cn = visible ? 'image' : 'image hide';
        const styleObj = { display: visible ? 'block' : 'none' };
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <hr />
                <img className={cn} src={eunha} alt="" />
            </div>
        );
    }
}

export default Demo;
