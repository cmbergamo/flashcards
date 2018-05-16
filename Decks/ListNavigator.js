import React from 'react';
import { StackNavigator } from 'react-navigation';
import Deck from './Deck';
import Card from './Card';
import Stats from './Stats';
import ListDecks from './ListDecks';

const ListNavigator = StackNavigator( {
	List: {
		screen: ListDecks
	},
	Deck: {
		screen: Deck,
		navigationOptions: ( { navigation } ) => ({
			title: "Baralho",
		} )
	},
	Card: {
		screen: Card,
		navigationOptions: ( { navigation } ) => ( {
			title: "Cartão",
		} )
	},
	Stats: {
		screen: Stats,
		navigationOptions: ( { navigation } ) => ( {
			title: "Estatísticas",
		} )
	}
},
{
	initialRouteName: 'List',
} );

export default ListNavigator;