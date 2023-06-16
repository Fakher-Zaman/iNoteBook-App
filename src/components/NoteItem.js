import React, { useContext } from 'react'
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title">{note.tag}</h5>
                        <div>
                            <i className="fa-regular fa-pen-to-square edit mx-2" onClick={() => { updateNote(note) }}></i>
                            <i className="fa-solid fa-trash-can delete mx-2" onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem