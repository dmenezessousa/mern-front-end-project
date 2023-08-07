import Banner from "../components/Banner"
import Characters from "../components/Characters"
import { useEffect } from "react"

export default function Home({ filteredChars, fetchCharacters, clearSearch }) {
  
  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <>
      <Banner />
      <div>
        <h1 >Attack On Titan Characters</h1>
      </div>
      <div className="character-container">
        {
        filteredChars.map((character) => (
          <Characters character={character} key={ character.id} clearSearch={clearSearch} />
            ))
          }
      </div>
    </>
  )
}
