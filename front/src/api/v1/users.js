
import v1 from './v1';

export default {
   register(email, password) {
      return v1.post('/users/tokens', {'user_email': email, 'password': password})
   },
   login(email, password) {
      return v1.post('/users', {'user_email': email, 'password': password})
   },
    resetLoginPass(token, password) {
        return v1.put('/users/password/' + token, { 'password': password})
    },
    changeLoginPass(oldPass, newPass) {
        return v1.put('/users/password', {'new_password': newPass, 'old_password': oldPass})
    },
    logout() {
        return v1.del('/users/tokens')
    },
    getMyUserInfo() {
        return v1.get('/users', { 'withCredentials': true })
    },
    updatePhoneNumber(new_phone_number,validation_code) {
      return v1.post('/vault/authorization',{new_phone_number:new_phone_number,validation_code:validation_code})
    }
};