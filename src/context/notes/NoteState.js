import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc",
        },
      });
      const json = await response.json();
      if (response.ok) setNotes(json);
      else console.error("Error fetching notes:", json);
    } catch (error) {
      console.error("Error in getNotes:", error.message);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      if (response.ok) setNotes(notes.concat(json));
      else console.error("Error adding note:", json);
    } catch (error) {
      console.error("Error in addNote:", error.message);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc",
        },
      });
      const json = await response.json();
      if (response.ok) {
        console.log("Note deleted:", json);
        setNotes(notes.filter((note) => note._id !== id));
      } else console.error("Error deleting note:", json);
    } catch (error) {
      console.error("Error in deleteNote:", error.message);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      if (response.ok) {
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index] = { ...element, title, description, tag };
            break;
          }
        }
        setNotes(newNotes);
      } else console.error("Error updating note:", json);
    } catch (error) {
      console.error("Error in editNote:", error.message);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
