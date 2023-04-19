import React, { useState } from "react";

function ToyForm({ handleNewToySubmit }) {
  const [newToyName, setNewToyName] = useState("");
  const [newToyImage, setNewToyImage] = useState("");

  function onToyFormSubmit(e) {
    e.preventDefault();
    const newToy = {
      name: newToyName,
      image: newToyImage,
      likes: 0,
    }
    handleNewToySubmit(newToy);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => onToyFormSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToyName}
          onChange={(e) => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToyImage}
          onChange={(e) => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
