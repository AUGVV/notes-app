import React, { Component } from 'react';

import '../css/Note.css';

export class Note extends Component {

    render() {
        return (
            <div class="note">
                <div className="title-bar">
                    <input placeholder="Title" className="title" value={this.props.title} onChange={this.props.changeTitle} />
                    <button className="close-button" onClick={this.props.click}>x</button>
                </div>
                <textarea placeholder="Description" className="description" wrap="Soft" value={this.props.desc} onChange={this.props.changeDesc} />
            </div>
        );
    }
}
