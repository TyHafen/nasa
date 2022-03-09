import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=b8d9Ac0Vg0zvlpkwtvVElpxjvVT1XsKuM7gJceiW"
})
