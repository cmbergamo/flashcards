import React from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { inject, observer } from 'mobx-react';

const ListDecks = ( props ) => {
	const { store } = props;

	return (
		<View style={ style.container } >
				{ store.listDecks.map( ( deck, ordem ) => {
						return (
							<TouchableOpacity onPress={ () => props.navigation.navigate( 'Deck', { ordem } ) } >
								<Text>{ deck.title }</Text>
								<Text>Cartões: { deck.cards.length }</Text>
							</TouchableOpacity>
						)
					}
				) }
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