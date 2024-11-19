import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitems from './Noteitems';
import AddNote from './AddNote';

function Notes() {
  const { notes, getNotes, editNote } = useContext(noteContext); // Access notes and getNotes from context
  const [currentNote, setCurrentNote] = useState({ id: "", title: "", description: "", tag: "" });
  const ref = useRef(null), refClose = useRef(null);
 
  useEffect(() => {
    getNotes();
  }, []); // Fetch notes on component load  //on backend database
   
  const updateNote = (note) => {
    setCurrentNote({ id: note._id, title: note.title, description: note.description, tag: note.tag }); // Set current note for editing
    ref.current.click(); // Trigger modal to show
  };

  const handleUpdate = () => {
    console.log("Updated Note:", currentNote); // Log updated note (replace with API call to update note)
    refClose.current.click(); // Close modal after updating
    editNote(currentNote.id, currentNote.title, currentNote.description, currentNote.tag) //add this on database (update Notes )
  };

  const onChange = (e) => setCurrentNote({ ...currentNote, [e.target.name]: e.target.value }); // Update fields dynamically

  return (
    <div>
      <AddNote /> {/* Add new notes */}

      {/* UpdateNote form */}

      <button ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"><h5>Edit Note</h5><button ref={refClose} className="btn-close" data-bs-dismiss="modal"></button></div>
            <div className="modal-body">
              <form>
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control mb-2" id="title" name="title" placeholder="Enter the title" value={currentNote.title} onChange={onChange} />
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control mb-2" id="description" name="description" placeholder="Enter the description" rows="3" value={currentNote.description} onChange={onChange}></textarea>
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" placeholder="Enter a tag" value={currentNote.tag} onChange={onChange} />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
      {/*End of Update Form */}
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => <Noteitems key={note._id} updateNote={updateNote} note={note} />)} {/* List of notes */}
      </div>
    </div>
  );
}

export default Notes;
