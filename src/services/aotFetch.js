import api from "./apiConfig"

export const getAllCharacters = async () => {
  try {
    const response = await api.get("/characters")
    return response.data
  } catch (error) {
    console.error("All Char Error:", error.message)
  }
}

export const getCharacterByName = async name => {
  try {
    const response = await api.get(`/characters/${name}`)
    return response.data
  } catch (error) {
    console.error("charByName Error:", error.message)
  }
}

export const getCharacterById = async(id) => {
  try {
    const response = await api.get(`/characters/id/${id}`)
    return response.data
  } catch (error) {
    console.error("charById Error:", error.message)
  }
}

export const createCharacter = async (charData) => {
  try {
    const response = await api.post("/characters", charData)
    return response.data
  } catch (error) {
    console.error("createChar Error:", error.message)
  }
}

export const updateCharacterById = async (id, charData) => {
  try {
    const response = await api.put(`/characters/${id}`, charData)
    return response.data
  } catch (error) {
    console.error("updateChar Error:", error.message)
  }
}

export const deleteCharacterById = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`)
    return response.data
  } catch (error) {
    console.error("deleteChar Error:", error.message)
  }
}