  //Create NoteState that can aceesable all files //;    
import NoteContext from "./noteContext"; // Ensure this path is correct

const NoteState = (props) => {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
