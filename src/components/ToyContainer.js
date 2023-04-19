import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleLike }) {
  const renderToyCards = toys.map(toy =>
    <ToyCard
      key={toy.id}
      toy={toy}
      handleDelete={handleDelete}
      handleLike={handleLike}
    />)
  return (
    <div id="toy-collection">{renderToyCards}</div>
  );
}

export default ToyContainer;
