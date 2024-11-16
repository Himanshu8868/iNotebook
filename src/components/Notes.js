import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext"; // Import the note context
import Noteitems from './Noteitems';
import AddNote from './AddNote';

function Notes() {
    const context = useContext(noteContext); // Get the context
    const { notes } = context; // Destructure to get the notes

    return (
        <div>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitems key={note._id} note={note} />; // Map through notes and pass to Noteitems
                })}
            </div>
        </div>
    );
}

export default Notes;
