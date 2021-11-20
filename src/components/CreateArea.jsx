import React, { useState } from "react";

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
    })
  }
  return (
    <div>
      <form>
        <input
          onChange={setN}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={setN}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleChange}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
