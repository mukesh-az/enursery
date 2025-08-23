import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
const cartInitialState = {
  cartItems: []
};

export const clearAllCartItems = createAsyncThunk(
  'items/clearAllCartItems',
  async () => {

  }
)

export const getCartItems = (state) => state.cart.cartItems;

export const getQuantity = (state, productId) => {
  if (state.cartItems.length === 0) return 0;

  if (productId && state.cartItems) {
    return state.cartItems.find(item => item.id.toString() === productId.toString())?.itemCount || 0;
  }
  return state.cartItems.reduce((acc, item) => acc + item.itemCount, 0);
};

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      const foundProduct = state.cartItems.find(item => item.id.toString() === action.payload.id.toString());
      if (!foundProduct) {
        state.cartItems.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
          unitPrice: action.payload.unitPrice,
          title: action.payload.title,
          image: action.payload.image,
          itemCount: 1
        });
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id.toString() !== action.payload.id.toString());
    },
    updateQuantity(state, action) {
      if (action.payload.itemCount < 1) {
        state.cartItems = state.cartItems.filter(item => item.id.toString() !== action.payload.id.toString());
        return;
      }
      const foundProduct = state.cartItems.find(item => item.id.toString() === action.payload.id.toString());
      if (foundProduct) {
        foundProduct.itemCount = action.payload.itemCount;
      }
    }
  }
  , extraReducers: builder => {
    builder.addCase(clearAllCartItems.fulfilled, (state, action) => {
      state.cartItems = [];
      return state;
    });
  }
});
export const { addItem, removeItem, updateQuantity, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
