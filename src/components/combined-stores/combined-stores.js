import { create } from "zustand";
import { createBearSlice } from "./bear-slice";
import { createFishSlice } from "./fish-slice";
import { createSelectors } from "../../store/create-selectors";
import { createCartSlice } from "./cart-slice";

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createCartSlice(...a),
}));

export const useBoundSelectors = createSelectors(useBoundStore);

//USE THIS METHOD FOR RELATED SLICES ,
//FOR EXAMPLE : if a bear eats a fish
//we have to decrease the fishes number
// thats why they are related to each other

//IF they are not related
//its better to create seperate stores for each one
//for mudularity and readability and a clean code
// in this case the cart isnt related in here, but its here for the syntax practice
