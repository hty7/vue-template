import axios from 'axios'
export const getCurrentUser = param => {
  return axios.get('/user/getUserInfo', param)
}
