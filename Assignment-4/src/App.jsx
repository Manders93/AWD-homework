import { useRef, useState } from "react";
import Country from "./components/Country";
import "./App.css";


function App() {
  const [countries, setCountries]= useState([
    {id:1, name: "United States"},
    {id:2, name: "China"},
    {id:3, name: "France"},
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
  return (
    <div>
      <header className="app-header"></header>

    {countries.map((country) => (
      <div className="country" key={country.id}>
      <Country
        country={country}
        onDelete={handleDelete}
        medals={medals.current}
      />
      </div>
    ))}
    </div>
  );
}
  
export default App;
