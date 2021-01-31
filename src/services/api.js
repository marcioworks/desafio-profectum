import axios from 'axios'

const api = axios.create({
  baseURL:'https://api.pipefy.com/graphql'
})

export default api