import { Schema, model } from 'mongoose'

const FollowSchema = new Schema(
  {
    followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // follow qilgan (men)
    followeeId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // follow qilingan odam
  },
  { timestamps: true },
)

FollowSchema.index({ followerId: 1, followeeId: 1 }, { unique: true })
FollowSchema.index({ followeeId: 1 })

export default model('Follow', FollowSchema)
