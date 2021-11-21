import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function setN(ev) {
    const { name, value } = ev.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleChange(ev) {
    ev.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    changeBool(false);
    handleRows(1);
  }

  const [isTrue, changeBool] = useState(false);
  const [rows, handleRows] = useState(1);
  function expand(){
    changeBool(true);
    handleRows(3);
  }
  return (
    <div>
      <form className="create-note">
      {isTrue ? <input
          onChange={setN}
          name="title"
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
        onClick={expand}
          onChange={setN}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={rows}
        />
        {isTrue ? <Zoom in={true}>
          <Fab onClick={handleChange}>
            <AddIcon />
          </Fab>
        </Zoom> : null}
      </form>
    </div>
  );
}

export default CreateArea;
