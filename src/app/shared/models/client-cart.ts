import { Cart } from './cart'
import { Product } from './product'
import { User } from './user'

export class ClientCart implements Cart {
    readonly id?: bigint
    products: Product[] = []
    readonly user?: User
}
