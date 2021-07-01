import './App.css';
import Recipe from './Recipe';
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState(``);
  const [request,setRequest] = useState(`banana`);

  const APP_ID = "YOUR_APP_ID";
  const APP_KEY = "YOUR_APP_KEY";
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${request}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  useEffect(() => {
    loadData();
  }, [request]);

  const loadData = async() =>{
    const response = await fetch(API_URL);
    const data = await response.json();
    (data.hits.length === 0 ? alert(`sorry we dont have that`): setRecipes(data.hits))
  }
  const handleSearch = (event) =>{
    setSearch(event.target.value);
  }
  const getRequest = (event) =>{
    event.preventDefault();
    setRequest(search);
    setSearch(``);
  }

  return (
    <div className="App">
      <h1>Recipes 🥣</h1>
      <form onSubmit={getRequest}>
        <label htmlFor="search">Search for a recipe </label>
        <input id="search" type="text" value={search} onChange={handleSearch}/>
        <button type="submit">Search</button>
        <Recipe recipes={recipes}/>
      </form> 
      <Footer />
    </div>
  );
}

export default App;
