import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Noteitem = ({ note, updateNote, showAlert = () => {} }) => {
  const { deleteNote } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Deleted successfully", "success"); // ✅ correct
  };

  return (
    <div className="col-md-3 mb-3">
      <div
        className="card mx-3"
        style={{
          width: "14rem",
          borderRadius: "0.2rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i
                className="fas fa-trash mx-2 text-dark"
                onClick={handleDelete}
              ></i>
              <i
                className="far fa-edit mx-2 text-primary"
                onClick={() => updateNote(note)}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
