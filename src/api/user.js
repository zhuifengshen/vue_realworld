/**
 * 用户相关接口
 */
import request from '@/utils/request'

export const login = ({ email, password }) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data: {
      user: {
        email,
        password,
      },
    },
  })
}

export const register = ({ username, email, password }) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  })
}
