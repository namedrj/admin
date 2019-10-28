import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password: password
  }
  return axios.request({
    url: 'login',
    data: data,
    method: 'post'
  })
}

// export const getUserInfo = (token) => {
//   return axios.request({
//     url: 'get_info',
//     params: {
//       // token
//       token
//     },
//     method: 'get'
//   })
// }

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
