import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext'; // Import NoteContext for file access

const About = () => {
  const a = useContext(NoteContext); // Access the context from NoteContext
   useEffect(() => {
      a.update();
      // eslint-disable-next-line
   }, [])
  return (
    <div>
      This is About {a.state.name} and class {a.state.class}
    </div>
  );
};

export default About;
