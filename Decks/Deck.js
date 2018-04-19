import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';

const Deck = ( props ) => {
	const { store } = props;
	return (
		<View>
			<Text>Deck</Text>
		</View>
	);
}

export default inject( 'store' )( observer( Deck ) );