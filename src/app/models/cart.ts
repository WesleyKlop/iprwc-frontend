import { Product } from './product'
import { User } from './user'

export interface Cart {
    readonly id?: bigint
    readonly user?: User
    products: Product[]
}
