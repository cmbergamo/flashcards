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
		screen: Deck
	},
	Card: {
		screen: Card
	},
	Stats: {
		screen: Stats
	}
},
{
	initialRouteName: 'List',
} );

export default ListNavigator;