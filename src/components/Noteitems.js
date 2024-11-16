import React from 'react';

function Noteitems({ note }) {
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <span className="badge bg-primary">{note.tag}</span>
                    <i class="fa-solid fa-trash mx-2"></i>
                    <i class="fa-regular fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    );
}

export default Noteitems;
