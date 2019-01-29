import { 
	ADD_BOOK, 
	SET_BOOKS,
	DELETE_BOOK, 
	EDIT_BOOK,
} from "../constants";

const initState = [];

export const booksReducer = (books = initState, action) => {
	console.log({ books, action });
	
	switch(action.type) {
	
	case DELETE_BOOK:
		return books.filter(book => 
			book && +book.id !== +action.books
		);
	case SET_BOOKS:
		return action.books;
	case ADD_BOOK:
		return [
			...books,
			{
				id: action.payload.id,
				title: action.payload.title,
				author: action.payload.author,
			}
		];
		case EDIT_BOOK:
			return books.map(book => +book.id === +action.id 
				? { 
					// ...book, 
					id: action.id,
					author: action.author, 
					title: action.title 
				}
				: book
			);
	default:
		return books;
	}
	
};
