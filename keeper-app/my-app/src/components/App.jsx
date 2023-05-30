import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./Area";

function App() {
  const [notes, setnotes] = useState([]);

  function addNote(newNote) {
    setnotes((prevnotes) => {
      return [...prevnotes, newNote];
    });
  }

  function deleteNote(id){
     setnotes(prevnotes => {
      return prevnotes.filter((noteItem, index) =>{
        return index!==id;
      })
     })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
