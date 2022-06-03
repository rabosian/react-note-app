import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.note.id)
        }}
      
      >DELETE</button>
    </div>
  )
}

export default Note