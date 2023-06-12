import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "tag": "Personal",
            "_id": "64856ef50546dc2e0843ee91",
            "title": "Workout",
            "description": "Please wake up early tomorrow!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T06:51:33.868Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout",
            "description": "Please wake up early tomorrow!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;