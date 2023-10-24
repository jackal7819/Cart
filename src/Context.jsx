import {
	CLEAR_CART,
	DECREASE,
	DISPLAY_ITEMS,
	INCREASE,
	LOADING,
	REMOVE,
} from './actions';
import { createContext, useContext, useReducer } from 'react';

import cartItems from './data';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
	loading: false,
	cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
