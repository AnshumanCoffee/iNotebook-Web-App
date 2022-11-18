import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  useEffect(() => {
    getNote();
  }, []);

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return <Noteitem key={notes._id} notes={notes} />;
        })}
      </div>
    </>
  );
};

export default Notes;
