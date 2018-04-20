import React from 'react';
import { StackNavigator } from 'react-navigation';
import Deck from './Deck';
import Card from './Card';
import ListDecks from './ListDecks';

const Stack = StackNavigator( {
	Home: {
		screen: ListDecks
	},
	Deck: {
		screen: Deck
	},
	Card: {
		screen: Card
	}
},
{
	initialRouteName: 'Home',
} );

export default Stack;