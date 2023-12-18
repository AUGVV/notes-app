import React from 'react';
import '../css/Button.css';

type Props = {
    searchLength: number;
    click: React.MouseEventHandler<HTMLButtonElement>
};

function Button({ click, searchLength }: Props) {
    if (searchLength <= 0) {
        return (
            <button className="button" onClick={click} >
                <div className="button-style">
                    <p className="button-text button-plus">+</p>
                </div>
                <p className="button-text">Add new note</p>
            </button>
        );
    }
    else {
        return null;
    }
}

export default Button;