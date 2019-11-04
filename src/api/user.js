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
    url: 'loginout',
    method: 'post'
  })
}

export const channelInfo = () => {
  const data = {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token')
  }
  return axios.request({
    url: 'channelInfo',
    data: data,
    method: 'post'
  })
}
