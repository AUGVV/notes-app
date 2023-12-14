import React, { Component } from 'react';
import { Button } from './Component/Button';
import { Note } from './Component/Note';

import './css/App.css';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: sessionStorage.getItem('notes') != null ? JSON.parse(sessionStorage.getItem('notes')) : [],
            counter: sessionStorage.getItem('notes') != null ? Math.max.apply(Math, JSON.parse(sessionStorage.getItem('notes')).map(item => item.id)) : 0
        };
    }

    removeNote(e, id) {
        e.preventDefault();
        this.setState(item => {
            var notes = item.notes.filter(el => el.id !== id);
            sessionStorage.setItem('notes', JSON.stringify(notes));
            return {
                notes: notes,
                counter: item.counter
            };
        });
    }


    addNewNote(e) {
        e.preventDefault();
        this.setState(item => {
            var counter = ++item.counter;
            var notes = [...item.notes, { id: counter, title: '', desc: '' }];
            sessionStorage.setItem('notes', JSON.stringify(notes));
            return {
                notes: notes,
                counter: counter
            };
        });
    }

    inputChangedHandler(e, id, type) {
        e.preventDefault();
        this.setState(item => {
            var itemForChange = item.notes.find(el => el.id === id);
            if (type === 'title') {
                itemForChange.title = e.target.value;
            }
            else if (type === 'desc') {
                itemForChange.desc = e.target.value;
            }
            sessionStorage.setItem('notes', JSON.stringify(item.notes));
            return {
                notes: item.notes,
                counter: item.counter
            };
        });
    }

    render() {
        return (
            <div className="App">
                <div className="Workspace">
                    {this.state.notes.map(item => (<Note
                        click={(e) => this.removeNote(e, item.id)}
                        title={item.title}
                        desc={item.desc}
                        changeTitle={(e) => this.inputChangedHandler(e, item.id, 'title')}
                        changeDesc={(e) => this.inputChangedHandler(e, item.id, 'desc')} />))}
                    <Button click={(e) => this.addNewNote(e)} />
                </div>
            </div>
        );
    }
}
