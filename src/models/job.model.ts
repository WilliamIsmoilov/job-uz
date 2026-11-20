import { MemberStatus } from '../libs/enums/member.enums'
import { Job, JobInput } from '../libs/types/job'
import { User } from '../libs/types/member'
import JobModel from '../schema/JobSchema'

class JobService {
  private readonly jobModel

  constructor() {
    this.jobModel = JobModel
  }

  public async createJob(input: JobInput, member: User): Promise<Job> {
    try {
      const result = await this.jobModel.create({
        ...input,
        userId: member._id,
      })
      return result as Job
    } catch (err) {
      console.log('Error, create job:', err)
      throw new Error('Job creation failed')
    }
  }
}

export default JobService
