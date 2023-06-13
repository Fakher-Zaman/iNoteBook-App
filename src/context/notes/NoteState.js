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
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_3",
            "description": "Please wake up early on wednesday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_4",
            "description": "Please wake up early on thursday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_5",
            "description": "Please wake up early on friday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_6",
            "description": "Please wake up early on saturday!",
            "user": "64841d8dc4546424b0e03ad0",
            "date": "2023-06-11T07:49:41.156Z",
            "__v": 0
        },
        {
            "tag": "Personal",
            "_id": "64857c953c52da19f004821f",
            "title": "Workout_7",
            "description": "Please wake up early on sunday!",
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