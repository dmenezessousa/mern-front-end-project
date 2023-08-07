import axios from "axios"

const apiUrl = "https://aot-api-7ef9780170ea.herokuapp.com/api"

const api = axios.create({
  baseURL: apiUrl
})

export default api