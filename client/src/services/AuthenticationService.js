import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/register', credentials)
  }
}

// # call like this.
// AuthenticationService.register({
//   email: 'mori@hoge.com',
//   password: '1111111'
// })