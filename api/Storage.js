import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'CMB-Udacity'

export function submityDeck( deck ) {
	return AsyncStorage.mergeItem( FLASHCARDS_STORAGE_KEY, JSON.stringify( { key: deck.id, deck } ) );
}

export function removeDeck ( deck ) {
	return AsyncStorage.getItem( FLASHCARDS_STORAGE_KEY)
		.then( results => {
			const decks = JSON.parse( results );

			decks[ deck.id ] = undefined;
			delete decks[ deck.id ];

			AsyncStorage.setItem( FLASHCARDS_STORAGE_KEY, JSON.stringify( decks ) );
		} );
}