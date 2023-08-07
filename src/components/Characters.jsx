import { Link } from "react-router-dom"

export default function Characters({ character, clearSearch }) {
  
  const newCharImg = character.img?.split("/revision")[0]
  if (!newCharImg) return null

  return (
    <div key={character._id}>
      <Link to={`/characters/${character._id}`}>
        <img className="characters-images" src={newCharImg} alt={character.name} onClick={clearSearch} />
      </Link>
    </div>
  )
}