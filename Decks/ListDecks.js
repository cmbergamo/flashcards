import React from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import SideMenu from '../Components/SideMenu';
import { inject, observer } from 'mobx-react';

const ListDecks = ( props ) => {
	const { store } = props;

	return (
		<View style={ style.view } >
			<SideMenu navigation={ props.navigation } />
			<View style={ style.container } >
				{ store.listDecks.map( ( deck ) => {
						return (
							<TouchableOpacity key={ deck.id } style={ style.deck } onPress={ () => props.navigation.navigate( 'Deck', { deck } ) } >
								<Text>{ deck.title }</Text>
								<Text>Cartões: { deck.cards.length }</Text>
							</TouchableOpacity>
						)
					}
				) }
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	view: {
		flex: 1,
	},
	container: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'white'
	},
	deck: {
		borderColor: 'skyblue',
		borderWidth: 1,
		borderStyle: 'solid',
		margin: 5,
		padding: 10
	}
});

export default inject( "store" )( observer( ListDecks ) );