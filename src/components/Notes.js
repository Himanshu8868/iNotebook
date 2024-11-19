import React, { useContext, useEffect ,useCallback } from 'react';
import noteContext from "../context/notes/noteContext"; // Import the note context
import Noteitems from './Noteitems'; // Component to display individual notes
import AddNote from './AddNote'; // Component to add new notes

function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    const fetchNotes = useCallback(() => {
        getNotes();
    }, [getNotes]);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [fetchNotes]);

    return (
        <div>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => (
                    <Noteitems key={note._id} note={note} />
                ))}
            </div>
        </div>
    );
}
     export default Notes ;