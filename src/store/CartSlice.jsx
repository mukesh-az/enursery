import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
const cartInitialState = {
    cartItems: []
};

export const clearAllCartItems = createAsyncThunk(
  'items/clearAllCartItems',
  async () => {
    // Simulate an API call to clear cart items
   
  }
)

export const getCartItems = (state) => state.cart.cartItems;

export const getQuantity = (state, productId) =>
    productId !== null ? 
            state.cartItems.find(item => item.id === productId)?.itemCount || 0 : 
            state.cartItems.reduce((acc, item) => acc + item.itemCount, 0);

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {

        const foundProduct = state.cartItems
            .find(item => item.id.toString() === action.payload.id.toString);
       if (!foundProduct) {
        state.cartItems.push( {
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
        console.log("Updating quantity for:", action.payload);
       const foundProduct = state.cartItems.find(item => item.id.toString() === action.payload.id.toString());
       if (foundProduct) {
           console.log("Found product:", foundProduct);
            let updatedArr = state.cartItems.map(item => {
            if (item.id.toString() === action.payload.id.toString() && item.quantity >= action.payload.itemCount) {
                item.itemCount = action.payload.itemCount;
                console.log("Updated item:", item);
            }
            return item;
        });
        state.cartItems = updatedArr;
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
