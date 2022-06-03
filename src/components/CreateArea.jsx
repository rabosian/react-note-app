import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="enter title"
        />
        <textarea
          name="content"
          placeholder="enter content"

          rows="3"
        />
        <button>
          Add
        </button>
      </form>
    </div>
  )
}

export default CreateArea