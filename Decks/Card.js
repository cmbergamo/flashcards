import React from 'react';
import { View, Text, Button } from 'react-native';

const Card = ( props ) => {
	const { cards, pos } = props.navigation.state.params;
	const card = cards[ pos ];
	return (
		<View>
			<Text>{ card.pergunta }</Text>
			<Text>{ card.resposta }</Text>
			<Button title='Próxima' onPress={ () => props.navigation.navigate( 'Card', { cards, pos: ++pos } ) } />
		</View>
	);
}

export default Card;