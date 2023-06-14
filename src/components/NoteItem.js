import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title">{note.tag}</h5>
                        <div>
                            <i className="fa-regular fa-pen-to-square edit mx-2"></i>
                            <i className="fa-solid fa-trash-can delete mx-2"></i>
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