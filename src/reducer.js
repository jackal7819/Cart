import {
	CLEAR_CART,
	DECREASE,
	DISPLAY_ITEMS,
	INCREASE,
	LOADING,
	REMOVE,
} from './actions';

const reducer = (state, action) => {
	if (action.type === CLEAR_CART) {
		return { ...state, cart: new Map() };
	}
	throw new Error(`No Matching Action Type: ${action.type}`);
};

export default reducer;
