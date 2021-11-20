import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, changeArr] = useState([]);

  function addNote(note) {
    changeArr((prev) => {
      return [...prev, note];
    });
  }
  function deleteBtn(id) {
    changeArr(prev => {
      return prev.filter((item, index)=>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {arr.map((item, index) => (
        <Note
          id={index}
          key={index}
          onDelete={deleteBtn}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

//2. Implement the delete note functionality.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
