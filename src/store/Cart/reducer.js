export const initialState = {
	products: [],
};

export function cartReducer(state, action) {
	switch (action.type) {
		case "ADD_PRODUCTS": {
			return { products: [...action.payload] };
		}
		default:
			return state;
	}
}
