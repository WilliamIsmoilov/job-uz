import { T } from '../libs/types/common'
import UserService from '../models/user.model'
import { Request, Response } from 'express'
import { UserInput, UserLogin } from '../libs/types/member'

const userService = new UserService()

const userController: T = {}

userController.signup = async (req: Request, res: Response) => {
  try {
    const input: UserInput = req.body
    const result = await userService.signup(input)
    res.status(201).json(result)
  } catch (err) {
    console.log('ERROR SignUp memberController', err)
    throw new Error('Signup failed')
  }
}

userController.login = async (req: Request, res: Response) => {
  try {
    const input: UserLogin = req.body
    const result = await userService.login(input)
    res.status(200).json(result)
  } catch (err) {
    console.log('Error login membercontroller', err)
    throw new Error('Login failed')
  }
}
export default userController
