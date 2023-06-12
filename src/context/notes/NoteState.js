import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const obj = {
        "name": "Fakher Zaman",
        "class": "BS-IT"
    }
    const [state, setState] = useState(obj);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Ali Hamza",
                "class": "B.A"
            });
        }, 3000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;