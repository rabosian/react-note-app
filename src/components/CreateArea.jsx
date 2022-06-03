import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: 0,
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const id = Math.floor(Math.random() * 10000)
    setNote((prev) => {
      return {
        ...prev,
        id,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="enter title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="enter content"
          value={note.content}
          onChange={handleChange}
          rows="3"
        />
        <button
          onClick={(e) => {
            props.addNote(note)
            e.preventDefault()
            // clear input, textarea
            setNote({
              title: "",
              content: ""
            })
          }}    
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default CreateArea