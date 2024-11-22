import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const { addNote } = useContext(noteContext); // Access addNote from context
    const [note, setNote] = useState({ title: "", description: "", tag: "" }); // State for inputs

    const handleClick = (e) => {
        e.preventDefault();
        if (!note.title || !note.description || !note.tag){
        props.showAlert("All fields is Required" , "warning")
        }
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" }); // Reset inputs
       props.showAlert("Note added Sucuessfully" , "success")
    };

    const onchange = (e) => setNote({ ...note, [e.target.name]: e.target.value }); // Update state

    return (
        <div className="container my-3">
            <h2>Add Note</h2>
            <form>
                <input type="text" placeholder="Title" name="title" value={note.title} onChange={onchange} className="form-control my-2" />
                <input type="text" placeholder="Description" name="description" value={note.description} onChange={onchange} className="form-control my-2" />
                <input type="text" placeholder="Tag" name="tag" value={note.tag} onChange={onchange} className="form-control my-2" />
                <button
                    disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length < 5}
                    className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    );
};

export default AddNote;
