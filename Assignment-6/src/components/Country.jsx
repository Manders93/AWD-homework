//import { useState } from "react";
import Medal from "./Medal";

function Country({ 
country, 
onDelete, 
medals,
onIncrement,
onDecrement,
}) {
  const totalMedals = country.gold + country.silver + country.bronze;

  return (
    <div>
      <h1>{country.name}</h1>

      <p>Total Medals: {totalMedals}</p>

      {medals.map((medal) => (
        <Medal 
        key={medal.id} 
        name={medal.name}
        count={country[medal.name]}
        onIncrement={() => onIncrement(country.id, medal.name)}
        onDecrement={() => onDecrement(country.id, medal.name)}
        />
      ))}

      

      <button type="button" onClick={() => onDelete(country.id)}>
        Delete
      </button>
    </div>
  );
}

export default Country;