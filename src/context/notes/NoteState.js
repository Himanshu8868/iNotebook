import { useState } from "react";
import NoteContext from "./noteContext"; // Ensure this path is correct

const NoteState = (props) => {
    const notesinital = [
        {
            _id: "67365102ae00r46716c001925",
            user: "67311f43195528664a3cdb1a",
            title: "this is my title",
            description: "api has been finished",
            tag: "complete",
            date: "2024-11-14T19:35:30.466Z",
            __v: 0,
        },
        {
            _id: "67365109ae00467146c001928",
            user: "67311f43195528664a3cdb1a",
            title: "this is my title",
            description: "api has been finished",
            tag: "complete",
            date: "2024-11-14T19:35:37.942Z",
            __v: 0,
        },
        {
            _id: "6736510cae00467f16c300192a",
            user: "67311f43195528664a3cdb1a",
            title: "this is my title",
            description: "api has been finished",
            tag: "complete",
            date: "2024-11-14T19:35:40.077Z",
            __v: 0,
        },
    ];
    const [notes, setNotes] = useState(notesinital);

    // Add a Note
    const addNote = (title, description, tag) => {
        console.log("Adding a note");
        const note = {
            _id: Date.now().toString(), // Unique ID
            user: "67311f43195528664a3cdb1a",
            title,
            description,
            tag,
            date: new Date().toISOString(),
            __v: 0,
        };
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = () => {
        // Implementation here
    };

    // Edit a Note
    const editNote = () => {
        // Implementation here
    };

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
