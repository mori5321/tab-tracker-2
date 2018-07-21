import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/register', credentials)
  },
  login (credentials) {
    return Api().post('/login', credentials)
  }
}

// # call like this.
// AuthenticationService.register({
//   email: 'mori@hoge.com',
//   password: '1111111'
// })
