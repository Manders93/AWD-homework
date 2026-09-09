//import { useState } from "react";

function Country({ country, onDelete}) {
  return (
    <div>
      <h1>{country.name}</h1>

      <p> Gold Medals: {country.gold}</p>

      <button type="button" onClick={() => onDelete(country.id)}>
        Delete
      </button>
    </div>
  );
}

export default Country;