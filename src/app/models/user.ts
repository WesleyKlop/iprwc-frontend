import { Role } from './role.enum'

export interface User {
  readonly id: bigint
  email: string
  role: Role
}
