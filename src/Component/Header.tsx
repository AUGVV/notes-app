import React from 'react';

import '../css/Header.css';

type Props = {
    searchText: string;
    search: React.ChangeEventHandler<HTMLInputElement>;
    click: React.MouseEventHandler<HTMLButtonElement>
};

function Header({ searchText, search, click }: Props) {
    return (
        <div className="header">
            <div className="app-name">Note App</div>
            <input className="search-input" placeholder="Search by title" value={searchText} onChange={search} />
            <button className="save-button" onClick={click} />
        </div>
    );
}

export default Header;