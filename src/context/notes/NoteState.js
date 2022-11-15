// import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    "name": "Anshuman",
    "class": "5a"
  };
  const [state, setState] = useState(s1);
    const update = ()=>{
    setTimeout(() => {
        setState({
            "name": "Mnu",
            "class": "6a"
        })
    }, 1000);
  }
  return (
    <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
