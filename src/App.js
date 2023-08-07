import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import UpdateToast from "./components/UpdateToast";
import DeleteToast from "./components/DeleteToast";
import CreateToast from "./components/CreateToast";
import CreateCharacter from "./pages/CreateCharacter";
import CharactersDetails from "./pages/CharactersDetails";
import { useEffect } from "react";
import { getAllCharacters } from "./services/aotFetch";
import { useState } from "react"
import {Routes, Route} from "react-router-dom"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showUpdateToast, setShowUpdateToast] = useState(false);
  const [showCreateToast, setShowCreateToast] = useState(false)

  const [charData, setCharData] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChars, setFilteredChars] = useState([]);

  async function fetchCharacters() {
    const allCharData = await getAllCharacters()
    setCharData(allCharData);
    setFilteredChars(allCharData);
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredChars(charData);
    } else {
      const filtered = charData.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredChars(filtered);
    }
  }, [searchQuery, charData]);

  function clearSearch() {
    setSearchQuery("");
  }

  return (
    <div className="App">
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <DeleteToast showDeleteToast={showDeleteToast} setShowDeleteToast={setShowDeleteToast} />
      <UpdateToast showUpdateToast={showUpdateToast} setShowUpdateToast={setShowUpdateToast} />
      <CreateToast showCreateToast={showCreateToast} setShowCreateToast={setShowCreateToast} />
      <Routes>
        <Route path="/" element={<Home
          filteredChars={filteredChars}
          fetchCharacters={fetchCharacters}
          clearSearch={clearSearch}
        />} />
        <Route path="/characters/:id" element={<CharactersDetails
          setShowDeleteToast={setShowDeleteToast}
          setShowUpdateToast={setShowUpdateToast}
        />} />
        <Route path="/create" element={<CreateCharacter
          setShowCreateToast={setShowCreateToast}
        />} />
      </Routes>
    </div>
  );
}

export default App;
