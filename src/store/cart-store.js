// import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
//   removeFromCart: (productId) =>
//     set((state) => ({
//       cart: state.cart.filter((prod) => prod.id !== productId),
//     })),
//   clearCart: () => set({ cart: [] }),
// }));

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((prod) => prod.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
}));
