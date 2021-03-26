import axios from 'axios'
export const register = newUser => {
    return axios
      .post('/users', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
      .then(response => {
        console.log('Registered')
      })
  }