import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [];
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState(notesInitial);
  //Get all note
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2YjNlYmQzYmE1ODRjNWM4ODNhYzgwIn0sImlhdCI6MTY2Nzk3MzM5MX0.r2cLNGbalRHd2cgd6yAaBGFP2s2y0LfwEFYatcWDfS4",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a new note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2YjNlYmQzYmE1ODRjNWM4ODNhYzgwIn0sImlhdCI6MTY2Nzk3Mjc5N30.ieMHu8sNNsiFMA8lH_EDWyPLPO17bibqrqHKUPqnBc0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const note = {
      _id: "636c5e36b7056fo076232570894",
      user: "636b3ebd3ba584c5c883ac80",
      title: title,
      description: description,
      tag: tag,
      date: "2022-11-10T02:13:10.865Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Edit note

  const editNote = async (id, title, description, tag) => {
    // console.log("Edited");
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2YjNlYmQzYmE1ODRjNWM4ODNhYzgwIn0sImlhdCI6MTY2Nzk3Mjc5N30.ieMHu8sNNsiFMA8lH_EDWyPLPO17bibqrqHKUPqnBc0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    // Edit logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  // Delete note
  const deleteNote = async (id) => {
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2YjNlYmQzYmE1ODRjNWM4ODNhYzgwIn0sImlhdCI6MTY2Nzk3Mjc5N30.ieMHu8sNNsiFMA8lH_EDWyPLPO17bibqrqHKUPqnBc0",
      },
    });
    const json = response.json();
    console.log(json);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
