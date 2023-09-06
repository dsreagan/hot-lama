import { create } from "zustand"
import Cart from "./entities/Cart"
import User from "./entities/User"

interface LamaStore {
  user?: User
  cart: Cart
  setUser: (user: User) => void
  setCart: (cart: Cart) => void
}

const useStore = create<LamaStore>((set) => ({
  user: {} as User,
  cart: {} as Cart,
  setUser: (user) => set((store) => ({ ...store, user: user })),
  setCart: (cart) => set((store) => ({ ...store, cart: cart })),
}))

export default useStore
