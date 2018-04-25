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
		<View style={ { flex: 1 } } >
			<SideMenu navigation={ props.navigation } />
			<View style={ style.container } >
				{ store.listDecks.map( ( deck, ordem ) => {
						return (
							<TouchableOpacity key={ deck.id } onPress={ () => props.navigation.navigate( 'Deck', { ordem } ) } >
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
	container: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'white',
	}
});

export default inject( "store" )( observer( ListDecks ) );