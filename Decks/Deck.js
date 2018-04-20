import React from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

const Deck = ( props ) => {
	const { store } = props;
	const decks = store.listDecks;
	const deck = decks[ props.navigation.state.params.ordem ];
	return (
		<View>
			<Text>{ deck.title }</Text>
			<Text>{ deck.cards.length }</Text>
			<Button title='Iniciar' onPress={ () => props.navigation.navigate( 'Card', { cards: deck.cards, pos: 0 } ) } />
		</View>
	);
}

export default inject( 'store' )( observer( Deck ) );