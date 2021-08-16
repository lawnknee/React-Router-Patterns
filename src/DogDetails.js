import React from "react";
import { useParams, Redirect } from "react-router-dom"

/*
Displays details about an individual dog, or redirects home if no existing dog.

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

    Can break into more components, dogdetail which is just the presentational
    and another one to contain the logic to find the dog
*/
function DogDetails({ dogs }) {
  const { name } = useParams();
  let dog = dogs.find(
    dog => dog.name.toLowerCase() === name.toLowerCase()
  );
  
  if (!dog) {
    return <Redirect to="/dogs" />
  }

  return (
    <div className="DogList-dog">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={`${dog.name}-${idx}`}>{fact}</li>
        ))}
      </ul>
    </div>
  )

}

export default DogDetails