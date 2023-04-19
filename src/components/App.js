import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  const toysURL = "http://localhost:3001/toys/";

  useEffect(fetchToys, []);

  function fetchToys() {
    fetch(toysURL)
      .then(res => res.json())
      .then(setToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToySubmit(newToy) {
    fetch(toysURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(newToyData => setToys([...toys, newToyData]))
  }

  function handleDelete(deletedToy) {
    fetch(`${toysURL}${deletedToy.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(setToys(toys.filter(toy => toy !== deletedToy)));
  }

  function handleLike(likedToy) {
    fetch(`${toysURL}${likedToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likedToy.likes + 1 })
    })
      .then(res => res.json())
      .then((updatedToy) => {
        const updatedToys = toys.map(toy =>
          toy.id === updatedToy.id ? updatedToy : toy
        );
        setToys(updatedToys);
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToySubmit={handleNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleLike={handleLike} />
    </>
  );
}

export default App;
