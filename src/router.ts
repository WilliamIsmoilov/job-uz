import express from 'express'
import userController from './controller/user.controller'
import jobController from './controller/job.controller'
import { verifyUser } from './middleware/auth'
import followController from './controller/jollow.controller'
const router = express.Router()

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.post('/job/create', verifyUser, jobController.createJob)
router.post('/follow/:id', verifyUser, followController.follow)

export default router
