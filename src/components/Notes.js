import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/note/NoteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  useEffect(() => {
    getNote();
  }, []);
  const [note, setNote] = useState({
    editedTitle: "",
    editedDescription: "",
    editedTag: "",
  });
  const handleClick = (e) => {
    console.log("Clicked")
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({editedTitle: currentNote.title, editedDescription: currentNote.description, editedTag: currentNote.tag});
  };
  const ref = useRef(null);
  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    value={note.editedTitle}
                    type="text"
                    className="form-control"
                    id="editedTitle"
                    name="editedTitle"
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <input
                    value={note.editedDescription}
                    type="text"
                    className="form-control"
                    id="editedDescription"
                    name="editedDescription"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.editedTag}
                    type="text"
                    className="form-control"
                    id="editedTag"
                    name="editedTag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"  onClick={handleClick}className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updateNote={updateNote} notes={notes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
