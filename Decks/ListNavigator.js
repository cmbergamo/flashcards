import React from 'react';
import { StackNavigator } from 'react-navigation';
import Deck from '·/Deck';

const Stack = StackNavigator( {
	Home: {
		screen: ListDecks
	},
	Deck: {
		screen: Deck
	}
},
{
	initialRouteName: 'Home',
} );

export default Stack;