/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import Card from './Components/Card';
import CreateCard from './Decks/CreateCard';
import CreateDeck from './Decks/CreateDeck';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { decks } from './reducers';


const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: ( <Card title='Android' /> ),
});

type Props = {};
export default class App extends Component<Props> {

	render() {
		return (
			<Provider store={ createStore( decks ) } >
				<View style={ { flex: 1 } } >
					<Stack style={ styles.container } />
					<Drawer />
				</View>
			</Provider>
		);
	}

}

const Stack = StackNavigator( {
	Card: {
		screen: CreateCard
	},
	Deck: {
		screen: CreateDeck
	}
},
{
	initialRouteName: 'Deck',
} );

const Drawer = DrawerNavigator ( {
	Home: {
		screen: CreateDeck,
		navigationOptions: {
			drawerLabel: 'Uhull'
		}
	},
	Card: {
		screen: Card,
		navigationOptions: {
			drawerLabel: 'Mostra o Card!'
		}
	}
} );

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	welcome: {
		// flex:1,
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	novoStyle: {
		flex: 1,
		borderStyle: "solid",
		borderWidth: 2,
		borderRadius: 3,
		padding: 5,
		margin: 2
	}
});
