import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc"
      }
    });
    const json = await response.json() 
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    console.log("Payload:", { title, description, tag }); // Log payload data

    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc",
        },
        body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log("Response:", json); // Log server response for debugging
    if (response.ok) {
        setNotes(notes.concat(json));
    } else {
        console.error("Error adding note:", json);
    }
};

  
  // Delete a Note
  const deleteNote = async (id) => {
    // API 
       // API Call 
       const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc"
        },
       
      });
const json = response.json();
   console.log(json)
    console.log("deleting a node" + id )
    const newnotes = notes.filter((note) =>{return note._id !== id})
    setNotes(newnotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczMTFmNDMxOTU1Mjg2NjRhM2NkYjFhIn0sImlhdCI6MTczMTI3Mjg3Nn0.F9oPp-UwliCzDlE9GV4Q1eaE9mVCXBv55KwFHPABdnc"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 
        console.log(json)
     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;