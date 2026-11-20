import { JobStatus } from '../enums/job.enum'
import { Types } from 'mongoose'

export interface Job {
  _id: Types.ObjectId
  userId: Types.ObjectId
  jobName: string
  jobRole: string
  jobPrice: string
  contactNumber: string
  location: string
  jobDesc: string
  jobDay: string
  jobDuration: string
  requirements?: string
  jobPhoto?: string
  jobStatus?: JobStatus
  jobLikes?: number
  jobComments?: number
  createdAt: Date
  updatedAt: Date
}

export interface JobInput {
  jobName: string
  jobRole: string
  jobPrice: string
  contactNumber: string
  location: string
  jobDesc: string
  jobDay: string
  jobDuration: string
  requirements?: string
  jobPhoto?: string
}

// bazadagi to'liq hujjat (userId va _id bor)
export interface Job extends JobInput {
  _id: Types.ObjectId
  userId: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}
