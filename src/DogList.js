import React from "react";

function DogList({dogs}) {
  return (
    <div className="DogList">
      {dogs.map(dog => (
        <div className="DogList-dog">
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
          <img src={dog.src} alt={dog.name} />
          <ul>
            {dog.facts.map(fact => (
              <li>{fact}</li>
            ))}
          </ul>
        </div>))}
    </div>
  )
}

export default DogList;