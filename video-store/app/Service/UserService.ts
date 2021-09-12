import User from 'App/Model/User'
import IUserService from './IUserService'
export default class UserService implements IUserService {
  public async createUser(newUser) {
    var user = new User()
    user.firstName = newUser.firstName
    user.lastName = newUser.lastName
    user.password = newUser.password
    user.email = newUser.email
    return await user.save()
  }
}
