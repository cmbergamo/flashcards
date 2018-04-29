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
	Button,
	StatusBar
} from 'react-native';
import Card from './Components/Card';
import CreateCard from './Decks/CreateCard';
import CreateDeck from './Decks/CreateDeck';
import SideMenu from './Components/SideMenu';
import ListDecks from './Decks/ListDecks';
import ListNavigator from './Decks/ListNavigator';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Provider, inject, observer } from 'mobx-react';
import store from './mobx/Store';
import { load } from './api/Storage';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: ( <Card title='Android' /> ),
});

type Props = {};
class App extends Component<Props> {

	render() {
		return (
			<Provider store={ store }>
					{/* <Stack style={ styles.container } /> */}
				<Drawer style={ { flex: 1 } } />
			</Provider>
		);
	}

}

const StackCreate = StackNavigator( {
	CCard: {
		screen: CreateCard
	},
	CDeck: {
		screen: CreateDeck
	}
},
{
	initialRouteName: 'CDeck',
} );

const Drawer = DrawerNavigator ( {
	Home: {
		screen: ListNavigator,
		navigationOptions: {
			drawerLabel: 'Listar Decks'
		}
	},
	Create: {
		screen: StackCreate,
		navigationOptions: {
			drawerLabel: 'Criar Deck'
		}
	}

},
{
	initialRouteName: 'Home',
}  );

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

export default App;
