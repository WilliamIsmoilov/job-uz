import { T } from '../libs/types/common'
import UserService from '../models/user.model'
import { Request, Response } from 'express'
import { UserInput } from '../libs/types/member'

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

export default userController
