import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  const [noteList, setNoteList] = useState([])

  const addNote = (note) => {
    setNoteList((prev) => [...prev, note])
    console.log(noteList)
  }

  const deleteNote = (id) => {
    const confirmPopup = window.confirm("Delete this note?")
    if (confirmPopup === true) {
      setNoteList(
        noteList.filter((item) => {
          return item.id !== id
        })
      )
      alert("Delete success!")
    }
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote}/>
      {noteList.map((note, index) => {
        return (
          <Note 
            key={index}
            note={note} 
            deleteNote={deleteNote}
          />
        )
      })}

      <Footer />
    </div>
  );
}

export default App;
