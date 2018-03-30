import { CREATE_DECK, CREATE_CARD, DELETE_CARD, DELETE_DECK, LIST_DECK } from '../actions';

const decks = ( state = { temp = {}, decks = [] }, action ) => {
	switch ( action.type ) {
		case CREATE_DECK :
			const { deck } = action;

			return {
				...state,
				temp: deck
			}
		case CREATE_CARD :
			const { card } = action;

			const deck = state.temp;

			const arrayCards = deck.cards.filter( c => c.id !== card.id);
			arrayCards.push( card );

			deck.cards = arrayCards;

			return {
				...state,
				temp: deck
			}

		case DELETE_CARD :
			const { deck } = action

			
		case DELETE_DECK :
		case LIST_DECK :
		default :
		return { };
	}
}