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
	StatusBar,
	ScrollView
} from 'react-native';
import CreateCard from './Decks/CreateCard';
import CreateDeck from './Decks/CreateDeck';
import SideMenu from './Components/SideMenu';
import ListDecks from './Decks/ListDecks';
import ListNavigator from './Decks/ListNavigator';
import Config  from './Components/Config';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Provider, inject, observer } from 'mobx-react';
import store from './mobx/Store';
import { load, clearLocalNotifications, setLocalNotifications, hasNotification } from './api/Storage';

type Props = {};
class App extends Component<Props> {

	UNSAFE_componentWillMount() {
		hasNotification().then( result => {
			if ( result !== null ) {
				clearLocalNotifications();

				setLocalNotifications( result.hour, result.minute );
			}
		} );
	}

	render() {
		return (
			<Provider store={ store }>
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
	},
	Config: {
		screen: Config,
		navigationOptions: {
			drawerLabel: 'Config'
		}
	}

},
{
	initialRouteName: 'Home',
	contentComponent: props => { return <CustomComponent {... props } /> }
}  );

const CustomComponent = ( props ) => {
	return (
		<ScrollView>
			<DrawerItems {...props}
				onItemPress={ ( { route } ) => {
					if ( route.routeName === 'Create' )
						store.newDeck();

					props.navigation.navigate( route.routeName );
				} } />
		</ScrollView>
	);
}

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
