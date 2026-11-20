import { Request, Response } from 'express'
import FollowService from '../models/follow.model'
import { T } from '../libs/types/common'

const followService = new FollowService()
const followController: T = {}

followController.follow = async (req: Request, res: Response) => {
  try {
    const result = await followService.follow(req.user, req.params.id as string)
    res.status(201).json(result)
  } catch (err: any) {
    console.log('ERROR follow controller', err)
    res.status(400).json({ message: err.message })
  }
}

export default followController
