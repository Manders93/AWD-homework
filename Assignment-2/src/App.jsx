import { useState } from "react";
import Country from "./components/Country";
import "./App.css";


function App() {
  const [countries, setCountries]= useState([
    {id:1, name: "United States", gold:3},
    {id:2, name: "China", gold:2},
    {id:3, name: "France", gold:1},
  ]);

  function handleDelete(id) {
    setCountries((countries) =>
      countries.filter((country) => country.id !== id)
    );
  }
  return (
    <div>
      <header className="app-header"></header>
    {countries.map((country) => (
      <div className="country">
      <Country
        key={country.id}
        country={country}
        onDelete={handleDelete}
      />
      </div>
    ))}
    </div>
  );
}
  
export default App;
