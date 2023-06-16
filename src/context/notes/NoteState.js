import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all note
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NDFkOGRjNDU0NjQyNGIwZTAzYWQwIn0sImlhdCI6MTY4NjM4MjA2Nn0.JRNOksklR3wrmlCVdvvj2Vi18JJjiU-KvFDLTLf5sD0'
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NDFkOGRjNDU0NjQyNGIwZTAzYWQwIn0sImlhdCI6MTY4NjM4MjA2Nn0.JRNOksklR3wrmlCVdvvj2Vi18JJjiU-KvFDLTLf5sD0'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        console.log(json);

        console.log("Adding a new note");
        const note = {
            "_id": "64857c953c52da19f004821f",
            "title": title,
            "description": description,
            "tag": tag,
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NDFkOGRjNDU0NjQyNGIwZTAzYWQwIn0sImlhdCI6MTY4NjM4MjA2Nn0.JRNOksklR3wrmlCVdvvj2Vi18JJjiU-KvFDLTLf5sD0'
            },
        });
        const json = response.json();
        console.log(json);

        console.log("Deleting a note");
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NDFkOGRjNDU0NjQyNGIwZTAzYWQwIn0sImlhdCI6MTY4NjM4MjA2Nn0.JRNOksklR3wrmlCVdvvj2Vi18JJjiU-KvFDLTLf5sD0'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;