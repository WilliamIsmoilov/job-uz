import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../schema/UserSchema' // o'zingizdagi yo'lni qo'ying

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const header = req.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token required' })
    }

    const token = header.split(' ')[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      _id: string
    }

    const user = await UserModel.findById(payload._id)
      .select('-userPassword')
      .lean()
    if (!user) return res.status(401).json({ message: 'User not found' })

    req.user = user as any
    next()
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}
