import React,{useContext} from 'react';
import noteContext from "../context/notes/noteContext";
function Noteitems(props) {
   // Using context to access the addNote function
   const context = useContext(noteContext);
   const { deleteNote} = context;
   
   const {note , updateNote} = props ;

   const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        deleteNote(note._id); // Call deleteNote function if confirmed
    }
};
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
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{handleDelete(note._id)}}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                 
                </div>
            </div>
        </div>  
    );
}

export default Noteitems;
