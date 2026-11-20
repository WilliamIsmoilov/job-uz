import { Request, Response } from 'express'
import { T } from '../libs/types/common'
import { JobInput } from '../libs/types/job'
import JobService from '../models/job.model'

const jobService = new JobService()

const jobController: T = {}

jobController.createJob = async (req: Request, res: Response) => {
  try {
    const input: JobInput = req.body
    const result = await jobService.createJob(input, req.user)
    res.status(201).json(result)
  } catch (err) {
    console.log('ERROR createJob controller', err)
    res.status(400).json({ message: 'Job creation failed' })
  }
}

export default jobController
