import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

class Card extends Component {

	state = {
		answer: false
	}

	answer( _type ) {
		if ( _type > 0 )
			this.props.store.correctAnswer();
		else
			this.props.store.wrongAnswer();
	}

	render() {
		const { cards, pos } = this.props.navigation.state.params;
		const card = cards[ pos ];

		let components = [];
		
		if ( this.state.answer ) {

			components.push( <Text key={ 1 } >{ card.answer }</Text> );
			components.push( <Button key={ 2 } title='Correto' onPress={ () => this.answer( 1 ) } /> );
			components.push( <Button key={ 3 } title='Errado' onPress={ () =>  this.answer( -1 ) } /> );

			if ( cards.length > pos + 1 ) {
				components.push( <Button key={ 4 } title='Próxima' onPress={ () => this.props.navigation.navigate( 'Card', { cards, pos: pos+1 } ) } /> );
			} else {
				components.push( <Button key={ 5 } title='Escolher outro Deck' onPress={ () => this.props.navigation.navigate( 'List' ) } /> );
			}

		} else {
			components.push( <Button key={ 6 } title='Mostrar Resposta' onPress={ () => this.setState( { answer: true } ) } /> );
		}

		return (
			<View>
				<Text>{ card.question }</Text>
				{ components.map( c => c ) }
			</View>
		);
	}
}

export default inject( "store" )( observer( Card ) );