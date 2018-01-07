import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://shs-k12-api.now.sh'
  })
}
