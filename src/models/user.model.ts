import bcrypt from 'bcryptjs'
import { UserInput } from '../libs/types/member'
import UserModel from '../schema/UserSchema'

class UserService {
  private readonly userModel

  constructor() {
    this.userModel = UserModel
  }

  public async signup(input: UserInput) {
    const salt = await bcrypt.genSalt()
    input.userPassword = await bcrypt.hash(input.userPassword, salt)

    const isExist = await this.userModel.findOne({ userEmail: input.userEmail })
    if (isExist) {
      throw new Error('User with this email already exists')
    }

    try {
      const result = await this.userModel.create(input)
      result.userPassword = ''
      return result
    } catch (err) {
      console.log('something went wrong login', err)
      throw new Error('Signup failed')
    }
  }
}

export default UserService
