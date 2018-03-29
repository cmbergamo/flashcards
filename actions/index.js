const CREATE_DECK = 'CREATE_DECK';

const createDeck = () => {
	return {
		type: CREATE_DECK
	}
}

const CREATE_CARD = 'CREATE_CARD';

const createCard = () => {
	return {
		type: CREATE_CARD
	}
}

const DELETE_CARD = 'DELETE_CARD';

const deleteCard = () => {
	return {
		type: DELETE_CARD
	}
}

const DELETE_DECK = 'DELETE_DECK';

const deleteDeck = () => {
	return {
		type: DELETE_DECK
	}
}

const LIST_DECK = 'LIST_DECK';

const listDeck = () => {
	return {
		type: LIST_DECK
	}
}