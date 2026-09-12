import { useRef, useState } from "react";
import Country from "./components/Country";
import "./App.css";


function App() {
  const [countries, setCountries] = useState([
  { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
]);

  const medals = useRef([
    {id: 1, name: "gold"},
    {id: 2, name: "silver"},
    {id: 3, name: "bronze"},
  ]);

  function handleDelete(id) {
    setCountries((countries) =>
      countries.filter((country) => country.id !== id)
    );
  }

  function handleIncrement(countryId, medalName){
    setCountries((countries) =>
    countries.map((country) =>
      country.id === countryId
    ? {...country, [medalName]: country[medalName] - 1 }
    : country
    )
    );
  }

function handleDecrement(countryId, medalName) {
  setCountries((countries) =>
  countries.map((country) =>
  country.id === countryId && country[medalName] > 0
  ? { ...country, [medalName]: country[medalName] - 1}
  : country
  )
  );
}

const totalGold = countries.reduce(
  (total, country)=> total + country.gold,
  0
);
const totalSilver = countries.reduce(
  (total, country)=> total + country.silver,
  0
);
const totalBronze = countries.reduce(
  (total, country)=> total + country.bronze,
  0
);

  return (
    <div>
      <header className="app-header">
      <h1>Olympic Medals</h1>

      <p>
        Gold: {totalGold} | Silver: {totalSilver} | Bronze: {totalBronze}
      </p>
      </header>

    {countries.map((country) => (
      <div className="country" key={country.id}>
      <Country
        country={country}
        onDelete={handleDelete}
        medals={medals.current}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      </div>
    ))}
    </div>
  );
}
  
export default App;
