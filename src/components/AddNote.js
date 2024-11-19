import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    // Using context to access the addNote function
    const context = useContext(noteContext);
    const { addNote } = context;

    // State to manage the input fields for title, description, and tag
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault(); // Prevent form reload

        // Validate input fields
        if (!note.title || !note.description || !note.tag) {
            console.error("All fields are required.");
            return;
        }

        // Call addNote with input values
        addNote(note.title, note.description, note.tag);

        // Reset the form fields after submission
        setNote({ title: "", description: "", tag: "" });
    };

    // Function to handle input field changes and update the note state
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }); // Dynamically updates the corresponding field in state
    };

    return (
        <div>
            <div className="container my-3">
                <h2>Add Your Notes</h2>
                <form className="my-3">
                    <div className="mb-3">
                        {/* Input field for the title */}
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={note.title} // Controlled input
                            onChange={onchange}
                        />
                    </div>
                    <div className="mb-3">
                        {/* Input field for the description */}
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={note.description} // Controlled input
                            onChange={onchange}
                        />
                    </div>
                    <div className="mb-3">
                        {/* Input field for the tag */}
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag} // Controlled input
                            onChange={onchange}
                        />
                    </div>
                    {/* Submit button to add the note */}
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    )
}
  export default AddNote