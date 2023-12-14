import React, { Component } from 'react';

import '../css/Button.css';

export class Button extends Component {
    render() {
        return (
            <button class="button" onClick={this.props.click}>
                <div className="button-style">
                    <p className="button-text button-plus">+</p>
                </div>
                <p className="button-text">Add new note</p>
            </button>
        );
    }
}
