import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = (props) => {
  const { notes, getNotes, editNote } = useContext(NoteContext);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  const ref = useRef(null);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  // Open modal and set note for editing
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    editNote(note.id, note.title, note.description, note.tag);
    props.showAlert("Note updated successfully", "success");
    document.activeElement.blur();
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      {/* Hidden button to trigger modal */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch modal
      </button>
      {/* Edit Note Modal */}
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
                Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                data-bs-dismiss="modal"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Display Notes */}
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>

        {notes.map((note) => (
          <Noteitem
            key={note._id}
            updateNote={updateNote}
            note={note}
            showAlert={props.showAlert}
          />
        ))}
      </div>
    </>
  );
};

export default Notes;
