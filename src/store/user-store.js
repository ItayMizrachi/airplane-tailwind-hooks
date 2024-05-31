import { create } from "zustand";
import { produce } from "immer";

const initialState = {
  user: {
    id: "user123",
    friends: ["jack", "itay"],
    profile: {
      name: "itay mizrachi",
      email: "itaymiz98@gmail.com",
      adress: {
        street: "123 Main St",
        city: "AnyCity",
        zipCode: "12345",
      },
    },
  },
};

export const useUserStore = create((set) => ({
  ...initialState,
  updateAddressStreet: (street) =>
    set(produce((state) => (state.user.profile.adress.street = street))),
}));
