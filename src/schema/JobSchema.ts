import mongoose, { model, Schema, Types } from 'mongoose'
import { JobStatus } from '../libs/enums/job.enum'

const jobSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    jobName: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    jobPrice: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: true,
    },
    jobDay: {
      type: String,
      required: true,
    },
    jobDuration: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
    },
    jobPhoto: {
      type: String,
    },
    jobStatus: {
      type: String,
      enum: JobStatus,
      default: JobStatus.ACTIVE,
    },
    jobLikes: {
      type: Number,
      default: 0,
    },
    jobComments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Job', jobSchema)
