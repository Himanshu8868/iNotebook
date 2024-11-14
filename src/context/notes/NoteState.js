  //Create NoteState that can aceesable all files //
import React, { useState } from "react";    
import NoteContext from "./noteContext"; // Ensure this path is correct

const NoteState = (props) => {
    const s1 = {
        name: "Himanshu",
        class: "1A"
    };
    const [state , setState] = useState(s1)
    const update = () => {
      setTimeout(() => {
         setState({
            name: "Himanshu",
            class:"21"
         })
      }, 2000);
    }

    return (
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
