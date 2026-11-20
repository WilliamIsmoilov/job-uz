import { T } from '../libs/types/common'
import UserService from '../models/user.model'
import { Request, Response } from 'express'
import { UserInput, UserLogin } from '../libs/types/member'
import jwt from 'jsonwebtoken'

const userService = new UserService()

const userController: T = {}

userController.signup = async (req: Request, res: Response) => {
  try {
    const input: UserInput = req.body
    const result = await userService.signup(input)
    const token = jwt.sign(
      { _id: result._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' },
    )
    res.status(201).json({ result, token })
  } catch (err) {
    console.log('ERROR SignUp memberController', err)
    throw new Error('Signup failed')
  }
}

userController.login = async (req: Request, res: Response) => {
  try {
    const input: UserLogin = req.body
    const user = await userService.login(input)
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' },
    )
    res.status(200).json({ user, token })
  } catch (err) {
    console.log('Error login membercontroller', err)
    throw new Error('Login failed')
  }
}
export default userController
