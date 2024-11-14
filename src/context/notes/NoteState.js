  //Create NoteState that can aceesable all files //;    
import { useState } from "react";
import NoteContext from "./noteContext"; // Ensure this path is correct

const NoteState = (props) => {
         const notesinital = [
                {
                  "_id": "67365102ae0046716c001925",
                  "user": "67311f43195528664a3cdb1a",
                  "title": "this is my title",
                  "description": "api has been finished",
                  "tag": "complete",
                  "date": "2024-11-14T19:35:30.466Z",
                  "__v": 0
                },
                {
                  "_id": "67365109ae0046716c001928",
                  "user": "67311f43195528664a3cdb1a",
                  "title": "3",
                  "description": "api has been finished",
                  "tag": "complete",
                  "date": "2024-11-14T19:35:37.942Z",
                  "__v": 0
                },
                {
                  "_id": "6736510cae0046716c00192a",
                  "user": "67311f43195528664a3cdb1a",
                  "title": "3",
                  "description": "api has been finished",
                  "tag": "complete",
                  "date": "2024-11-14T19:35:40.077Z",
                  "__v": 0
                }
              ]
         const[notes, setNotes] = useState(notesinital)
    return (
        <NoteContext.Provider value={{notes , setNotes}}>  {/*access Notes and setnotes in everywhere where i want */}
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
