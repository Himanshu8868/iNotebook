import React,{useContext} from 'react';
import noteContext from "../context/notes/noteContext";
function Noteitems(props) {
   // Using context to access the addNote function
   const context = useContext(noteContext);
   const { deleteNote} = context;
   const {editNote} = context;
   const {note} = props ;


    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    {/* Display the title of the note */}
                    <h5 className="card-title">{note.title}</h5>
                    
                    {/* Display the description of the note */}
                    <p className="card-text">{note.description}</p>
                    
                    {/* Display the tag as a badge */}
                    <span className="badge bg-primary">{note.tag}</span>
                    
                    {/* Icons for delete and edit actions */}
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{editNote(note._id)}}></i>
                </div>
            </div>
        </div>  
    );
}

export default Noteitems;
