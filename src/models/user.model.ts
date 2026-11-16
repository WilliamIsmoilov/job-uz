import bcrypt from 'bcryptjs'
import { UserInput, UserLogin } from '../libs/types/member'
import UserModel from '../schema/UserSchema'
import { MemberStatus } from '../libs/enums/member.enums'
import * as bcryptjs from 'bcryptjs'

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

  public async login(input: UserLogin) {
    const user = await this.userModel
      .findOne(
        {
          userEmail: input.userEmail,
          userStatus: { $ne: MemberStatus.BLOCKED },
        },
        { userEmail: 1, userPassword: 1, userStatus: 1 },
      )
      .exec()

    if (!user) {
      throw new Error('User not found')
    } else if (user.userStatus === MemberStatus.BLOCKED) {
      throw new Error('User is blocked')
    }

    const isMatch = await bcryptjs.compare(
      input.userPassword,
      user.userPassword,
    )
    if (!isMatch) throw new Error('Password is incorrect')

    return user
  }
}

export default UserService
