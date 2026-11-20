import mongoose, { Schema } from 'mongoose'
import { MemberStatus, MemberType } from '../libs/enums/member.enums'

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userFullname: {
      type: String,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userContactLink: {
      type: String,
    },
    userPassword: {
      type: String,
      required: true,
    },
    appliedJobs: {
      type: Number,
      default: 0,
    },
    userLocation: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
    },
    userDesc: {
      type: String,
    },
    userComments: {
      type: Number,
      default: 0,
    },
    userLikes: {
      type: Number,
      default: 0,
    },
    savedJobs: {
      type: Number,
      default: 0,
    },
    userStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    blockedUsersNumber: {
      type: Number,
      default: 0,
    },
    blockNumber: {
      type: Number,
      default: 0,
    },
    userType: {
      type: String,
      enum: MemberType,
      default: MemberType.JOB_SEEKER,
      required: true,
    },
    userFollowing: {
      type: Number,
      default: 0,
    },
    userFollowers: {
      type: Number,
      default: 0,
    },
    createdJobs: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
)

export default mongoose.model('User', userSchema)
