import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Card extends Component {

	state = {
		answer: false
	}

	render() {
		const { cards, pos } = this.props.navigation.state.params;
		const card = cards[ pos ];

		const next = cards.length > pos + 1 ?
			( <Button key={ 2 } title='Próxima' onPress={ () => this.props.navigation.navigate( 'Card', { cards, pos: pos+1 } ) } /> )
			: ( <Button key={ 2 } title='Escolher outro Deck' onPress={ () => this.props.navigation.navigate( 'List' ) } /> )

		return (
			<View>
				<Text>{ card.pergunta }</Text>
				{ this.state.answer ? [ 
						( <Text key={ 1 } >{ card.resposta }</Text> ),
						( next )
					]: (
						<Button title='Mostrar Resposta' onPress={ () => this.setState( { answer: true } ) } />
					)
				}
				
			</View>
		);
	}
}

export default Card;