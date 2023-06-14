import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "tag": "Personal",
            "_id": "64856ef50546dc2e0843ee91",
            "title": "Workout_1",
            "description": "Please wake up early on monday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T06:51:33.868Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_2",
            "description": "Please wake up early on tuesday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52aa19f004821f",
            "title": "Workout_3",
            "description": "Please wake up early on wednesday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857ce53c52da19f004821f",
            "title": "Workout_4",
            "description": "Please wake up early on thursday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52dr19f004821f",
            "title": "Workout_5",
            "description": "Please wake up early on friday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da1yf004821f",
            "title": "Workout_6",
            "description": "Please wake up early on saturday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "44857c953c52da19f004821f",
            "title": "Workout_7",
            "description": "Please wake up early on sunday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title, description, tag) => {
        // API Call
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
    const deleteNote = (id) => {
        // API Call
        console.log("Deleting a note");
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = (id, title, description, tag) => {
        // API Call
        console.log("Editing a note");
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;