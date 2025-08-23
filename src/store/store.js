import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import toast from "../middleware/toast";


 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toast),
});
export default store;