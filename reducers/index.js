import { CREATE_DECK, CREATE_CARD, DELETE_CARD, DELETE_DECK, LIST_DECK } from '../actions';

const decks = ( state = {}, action ) => {
	switch ( action.type ) {
		case CREATE_DECK :
		case CREATE_CARD :
		case DELETE_CARD :
		case DELETE_DECK :
		case LIST_DECK :
		default :
		return { };
	}
}