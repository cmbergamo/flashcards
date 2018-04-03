import { CREATE_DECK, CREATE_CARD, DELETE_CARD, DELETE_DECK, LIST_DECK } from '../actions';

export const decks = ( state = { temp: {}, decks: [] }, action ) => {
	switch ( action.type ) {
		case CREATE_DECK :
			let { deck } = action;

			return {
				...state,
				temp: deck
			}
		case CREATE_CARD :
			const { card } = action;

			deck = state.temp;
			const arrayCards = deck.cards ? deck.cards.filter( c => c.id !== card.id) : [];
			arrayCards.push( card );

			deck.cards = arrayCards;

			console.log( deck );

			return {
				...state,
				temp: deck
			}

		case DELETE_CARD :
			deck = action.deck;

		case DELETE_DECK :
		case LIST_DECK :
			const { decks } = action;

			
		default :
		return state;
	}
}