import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

function About() {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
    }, []);
    return (
        <div>
            This is name {a.state.name} and he is in class {a.state.class}
        </div>
    )
}

export default About