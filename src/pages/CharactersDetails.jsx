import { useEffect, useState } from "react"
import { getCharacterById, deleteCharacterById } from "../services/aotFetch"
import { useParams, useNavigate } from "react-router-dom"
import CharacterUpdate from "../components/CharacterUpdate"
import Button from "react-bootstrap/Button"



export default function CharactersDetails({setShowDeleteToast, setShowUpdateToast}) {
  const [charById, setCharById] = useState({})
  const [editable, setEditable] = useState(false)

  const newCharImg = charById.img?.split("revision")[0]

  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchSingleChar()
  }, [editable])

  async function fetchSingleChar() {
    try {
      const singleCharData = await getCharacterById(id)
      setCharById(singleCharData)
    } catch (error) {
      console.error("error fetching char data", error)
    }
  }


  async function handleDelete() {
    await deleteCharacterById(id)
    setShowDeleteToast(true)
    navigate("/")
  }

  return (
    <div >
      <h1 className="char-page-title">Update Character</h1>
      <div className="char-details-update-container">
      {editable ? (
        <CharacterUpdate
          setEditable={setEditable}
          setCharById={setCharById}
          charById={charById}
          setShowUpdateToast={setShowUpdateToast}
        />
      ) : (
        <div className="char-container">
            <h2 className="char-title">{charById.name}</h2>
            <div className="char-info-container">
              <img src={newCharImg} alt={charById.name} />
              <div className="char-info">
                <p><span>Age:</span> {charById.age}</p>
                <p><span>Gender:</span> {charById.gender}</p>
                <p><span>Species:</span> {charById.species}</p>
                <p><span>Occupation:</span> {charById.occupation}</p>
                <p><span>Status:</span> {charById.status}</p>
              </div>
            </div>
              <div className="char-details-btn">
              <Button variant="secondary" onClick={() => navigate("/")}>Back</Button>
              <Button variant="success" onClick={() => setEditable(true)}>Update</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
