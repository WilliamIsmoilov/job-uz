import mongoose from 'mongoose'
import FollowModel from '../schema/FollowSchema'
import UserModel from '../schema/UserSchema'
import { User } from '../libs/types/member'
import UserService from './user.model'

class FollowService {
  private readonly followModel = FollowModel
  private readonly userModel = UserModel

  constructor() {
    this.followModel = FollowModel
    this.userModel = UserModel
  }
  userService = new UserService()

  public async follow(member: User, targetId: string) {
    if (!mongoose.isValidObjectId(targetId)) throw new Error('Invalid user id')
    if (String(member._id) === targetId)
      throw new Error('You cannot follow yourself')

    const target = await this.userModel.findById(targetId)
    if (!target) throw new Error('User not found')
    try {
      await this.followModel.create({
        followerId: member._id,
        followeeId: targetId,
      })

      await this.userService.memberStatsEditor({
        _id: member._id,
        targetKey: 'userFollowings',
        modifier: 1,
      })
      await this.userService.memberStatsEditor({
        _id: targetId,
        targetKey: 'userFollowers',
        modifier: 1,
      })
    } catch (err: any) {
      if (err.code === 11000) throw new Error('Already following')
      throw err
    }
    return { following: true }
  }
}

export default FollowService
