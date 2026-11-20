import { User } from '../libs/types/user'

declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
}
export {}
