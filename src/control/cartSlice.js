import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    restartCart: (state) => {
      state.cartItems = courseItems;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem.quantity <= 0) {
        cartItem.quantity = 0;
      } else {
        cartItem.quantity -= 1;
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});
export const {
  clearCart,
  increase,
  removeItem,
  restartCart,
  decrease,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
