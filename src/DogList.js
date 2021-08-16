import React from "react";

/*
displays a list of all dogs and all information about those dogs

props: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    }, ...]
*/ 
function DogList({dogs}) {
  return (
    <div className="DogList">
      {dogs.map(dog => (
        <div className="DogList-dog" key={dog.name}>
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
          <img src={dog.src} alt={dog.name} />
          <ul>
            {dog.facts.map((fact,idx) => (
              <li key={`${dog.name}-${idx}`}>{fact}</li>
            ))}
          </ul>
        </div>))}
    </div>
  )
}

export default DogList;