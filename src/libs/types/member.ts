import { Types } from 'mongoose'
import { MemberStatus, MemberType } from '../enums/member.enums'

export interface User {
  _id: Types.ObjectId
  userName: string
  userFullname?: string
  userPhone: string
  userEmail: string
  userContactLink?: string
  userPassword: string
  appliedJobs: number
  userLocation: string
  userPhoto?: string
  userDesc?: string
  userComments?: number
  userLikes?: number
  savedJobs?: number
  userStatus: MemberStatus
  blockedUsersNumber?: number
  blockNumber: number
  userFollowing: number
  userFollowers: number
  userType: MemberType
  createdAt: Date
  updatedAt: Date
}

export interface UserInput {
  userType: MemberType
  userStatus?: MemberStatus
  userName: string
  userEmail: string
  userPhone: string
  userPassword: string
  userLocation: string
  userDesc?: string
  userPhoto?: string
}

export interface UserLogin {
  userEmail: string
  userPassword: string
}

export interface ExtendedRequest extends Request {
  user: User
}
