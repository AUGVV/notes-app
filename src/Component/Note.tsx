import React from 'react';
import '../css/Note.css';

type Props = {
    title: string;
    desc: string;
    changeTitle: React.ChangeEventHandler<HTMLInputElement>;
    changeDesc: React.ChangeEventHandler<HTMLTextAreaElement>;
    click: React.MouseEventHandler<HTMLButtonElement>
};

function Note({ title, desc, changeTitle, changeDesc, click }: Props) {
    return (
        <div className="note">
            <div className="title-bar">
                <input placeholder="Title" className="title" value={title} onChange={changeTitle} />
                <button className="close-button" onClick={click}>x</button>
            </div>
            <textarea placeholder="Description" className="description" wrap="Soft" value={desc} onChange={changeDesc} />
        </div>
    );
}

export default Note;