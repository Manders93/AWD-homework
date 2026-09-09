import { useState } from "react";

function Country() {
 const [name, setName] = useState("United States");
 const [gold, setGold] = useState(0);

   function handleClick() {
    setGold((gold) => gold + 1);
  }

  return (
    <div>
      <h1>{name}</h1>

      <p> Gold Medals: {gold}</p>

      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default Country;