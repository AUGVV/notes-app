import React from 'react';
import '../css/Button.css';

type Props = {
    click: React.MouseEventHandler<HTMLButtonElement>
};

function Button({ click }: Props) {
    return (
        <button className="button" onClick={click} >
            <div className="button-style">
                <p className="button-text button-plus">+</p>
            </div>
            <p className="button-text">Add new note</p>
        </button>
    );
}

export default Button;