import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from "react";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    // console.log("Clicked")
    e.preventDefault();
    addNote(notes.title, notes.description, notes.tag,);
  }; 
  const onChange = (e) => {
    setNotes({...notes, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Add a new Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary "
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;