import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext'; // Import NoteContext, not NoteState

const About = () => {
  const a = useContext(NoteContext); // Access the context from NoteContext

  return (
    <div>
      This is About {a.name}
    </div>
  );
};

export default About;
