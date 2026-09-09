//import { useState } from "react";
import Medal from "./Medal";

function Country({ country, onDelete, medals}) {
  return (
    <div>
      <h1>{country.name}</h1>

      {medals.map((medal) => (
        <Medal key={medal.id} name={medal.name} />
      ))}

      

      <button type="button" onClick={() => onDelete(country.id)}>
        Delete
      </button>
    </div>
  );
}

export default Country;