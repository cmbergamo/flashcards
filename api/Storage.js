import { AsyncStorage } from 'react-native';

export function submityDeck( deck ) {
	return AsyncStorage.mergeItem( key, JSON.stringify( { key: deck.id, deck } ) );
}

export function removeDeck ( deck ) {
	return AsyncStorage.getItem( key)
		.then( results => {
			const decks = JSON.parse( results );

			decks[ deck.id ] = undefined;
			delete decks[ deck.id ];

			AsyncStorage.setItem( key, JSON.stringify( decks ) );
		} );
}