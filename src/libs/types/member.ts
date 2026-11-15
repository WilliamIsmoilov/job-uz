import { MemberStatus, MemberType } from '../enums/member.enums'

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
