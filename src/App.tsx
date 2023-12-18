import React, { useState } from "react";
import Button from "./Component/Button";
import Header from "./Component/Header";
import Note from "./Component/Note";
import './css/App.css';

export default function App() {

    type NoteObject = {
        id: number;
        title: string;
        description: string;
    }

    const [notes, setNotes] = useState(() => {
        let noteList = sessionStorage.getItem('notes');
        if (noteList === null) {
            return [];
        }

        return JSON.parse(noteList);
    })

    const [counter, setCounter] = useState(() => {
        let json = sessionStorage.getItem('notes');
        if (json === null) {
            return 0;
        }

        let noteList = JSON.parse(json)
        if (noteList.length === 0) {
            return 0;
        }
        return Math.max.apply(Math, noteList.map((item: { id: any; }) => item.id)) + 1;
    })

    const [searchText, setSearch] = useState("")

    function addNewNote(e: any) {
        e.preventDefault();

        let newNotes = [...notes, { id: counter, title: '', description: '' }];

        setNotes(newNotes);
        setCounter(counter + 1);
    }

    function removeNote(e: any, id: number) {
        e.preventDefault();

        let newNotes = notes.filter((el: { id: number; }) => el.id !== id);

        setNotes(newNotes);
    }

    function inputChangedHandler(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: number, type: string) {
        e.preventDefault();
        let changedNotes = notes.map((el: NoteObject) => {
            if (el.id === id) {
                if (type === 'title') {
                    el.title = e.target.value;
                }
                else if (type === 'desc') {
                    el.description = e.target.value;
                }
                return el;
            } else {
                return el;
            }
        });

        setNotes(changedNotes);
    }

    function search(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function saveAllNotes(e: any) {
        e.preventDefault();
        sessionStorage.setItem('notes', JSON.stringify(notes));
    }

    return (
        <div className="App" >
            <Header search={(e: any) => search(e)} click={saveAllNotes} searchText={searchText} />
            <div className="Workspace" >
                {
                    notes.filter((el: NoteObject) => el.title.toLowerCase().includes(searchText.toLowerCase())).map((item: NoteObject) => (<Note
                        title={item.title}
                        desc={item.description}
                        changeTitle={(e: any) => inputChangedHandler(e, item.id, 'title')}
                        changeDesc={(e: any) => inputChangedHandler(e, item.id, 'desc')}
                        click={(e: any) => removeNote(e, item.id)}
                    />))
                }
                <Button click={(e: any) => addNewNote(e)} searchLength={searchText.length} />
            </div>
        </div>
    );
}