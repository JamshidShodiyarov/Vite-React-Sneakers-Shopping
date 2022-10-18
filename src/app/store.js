import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice.js';

const store = configureStore({
	reducer: {
		CartSlice,
	},
});

export default store;
