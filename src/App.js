import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MalePage from "./pages/MalePage";
import FemalePage from "./pages/FemalePage";


function App() {

  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {

    // Fetching data from the API
    const url = "https://rickandmortyapi.com/api/character"
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
      setCharacters(data.results);
      sendData(data.results);
    }).catch(error => console.log(error))

  }, []);

  
  /** Saves the character into the database */
  function sendData(data) {
    const url = "http://localhost:5000/save";
    fetch(url, {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)

    }).then(response => console.log(response))
      .catch(error => console.log(error))
  }


  return (
    <div className="bg-slate-700 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home characters={characters} favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/male" element={<MalePage characters={characters} favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/female" element={<FemalePage characters={characters} favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;
