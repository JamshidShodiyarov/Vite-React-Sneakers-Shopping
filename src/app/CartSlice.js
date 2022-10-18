import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
	cartState: false,
	cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
	cartTotalAmount: 0,
	cartTotalQuantity: 0,
};

const CartSlice = createSlice({
	initialState,
	name: 'cart',
	reducers: {
		setOpenCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},
		setCloseCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},
		setAddItemToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.success('Item QTY Increset');
			} else {
				const temp = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(temp);
				toast.success(`${action.payload.title} added to Cart`);
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		setRemoveItemFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
			toast.success(`${action.payload.title} Removed From Cart`);
		},
		setDecreaseItemQTY: (state, actions) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === actions.payload.id);
			state.cartItems[itemIndex].cartQuantity -= 1;
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		setIncreaseItemQTY: (state, actions) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === actions.payload.id);
			state.cartItems[itemIndex].cartQuantity += 1;
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		setClearCartItems: (state, actions) => {
			state.cartItems = [];
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		setGetTotals(state, action) {
			state.cartTotalQuantity = state.cartItems.reduce((sum, obj) => {
				return sum + obj.cartQuantity;
			}, 0);
			state.cartTotalAmount = state.cartItems.reduce((sum, obj) => {
				return sum + obj.price * obj.cartQuantity;
			}, 0);
		},
	},
});

export const {
	setCloseCart,
	setOpenCart,
	setAddItemToCart,
	setRemoveItemFromCart,
	setDecreaseItemQTY,
	setIncreaseItemQTY,
	setClearCartItems,
	setGetTotals,
} = CartSlice.actions;
export const selectCartState = (state) => state.CartSlice.cartState;
export const selectCartItems = (state) => state.CartSlice.cartItems;
export const selectTotalAmount = (state) => state.CartSlice.cartTotalAmount;
export const selectTotalQTY = (state) => state.CartSlice.cartTotalQuantity;
export default CartSlice.reducer;
