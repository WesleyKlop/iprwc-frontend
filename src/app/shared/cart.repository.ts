import { Cart } from './models/cart'
import { ClientCart } from './models/client-cart'

export const STORE_CART = 'store-cart'

export class CartRepository {
    public static load(): Cart {
        const serialized = localStorage.getItem(STORE_CART)

        return JSON.parse(serialized) as Cart
    }

    public static create(): Cart {
        return new ClientCart()
    }

    public static hasSavedCart(): boolean {
        return STORE_CART in localStorage
    }

    public static save(cart: Cart): void {
        localStorage.setItem(STORE_CART, JSON.stringify(cart))
    }

    static createOrLoad(): Cart {
        if (CartRepository.hasSavedCart()) {
            return CartRepository.load()
        }
        return CartRepository.create()
    }

    static clear(): void {
        localStorage.removeItem(STORE_CART)
    }
}
