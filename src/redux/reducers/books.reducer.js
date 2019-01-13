import { ADD_BOOK, FETCH_BOOKS, SET_BOOKS } from "../constants";

const initState = {};

export const booksReducer = (state = initState, action) => {
	switch(action.type) {
		
		case SET_BOOKS:
			return action.payload;
		case FETCH_BOOKS:
			return action.payload;
		case ADD_BOOK:
			return {
				...state,
				[state.books]: action.payload,

			};
		default:
			return state;
	}
};