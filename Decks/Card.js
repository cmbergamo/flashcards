import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';

class Card extends Component {

	state = {
		answer: false,
		disabled: false
	}

	answer( _type ) {
		if ( _type > 0 )
			this.props.store.correctAnswer();
		else
			this.props.store.wrongAnswer();

		this.setState( { disabled: true } );
	}

	render() {
		const { cards, pos } = this.props.navigation.state.params;
		const card = cards[ pos ];

		let components = [];

		const total = cards.length;
		const atual = pos + 1;
		
		if ( this.state.answer ) {

			components.push( <Text key={ 1 } >{ card.answer }</Text> );
			components.push( <Button key={ 2 } title='Correto' disabled={ this.state.disabled } onPress={ () => this.answer( 1 ) } /> );
			components.push( <Button key={ 3 } title='Errado' disabled={ this.state.disabled } onPress={ () =>  this.answer( -1 ) } /> );

			if ( total > atual ) {
				components.push( <Button key={ 4 } title='Próxima' disabled={ !this.state.disabled } onPress={ () => this.props.navigation.navigate( 'Card', { cards, pos: pos+1 } ) } /> );
			} else {
				components.push( <Button key={ 5 } title='Estatisticas' disabled={ !this.state.disabled } onPress={ () => this.props.navigation.navigate( 'Stats' ) } /> );
			}

		} else {
			components.push( <Button key={ 6 } title='Mostrar Resposta' onPress={ () => this.setState( { answer: true } ) } /> );
		}

		return (
			<View style={ styles.container } >
				<Text>{ card.question }</Text>
				{ components.map( c => c ) }
				<Text>Cartão { atual } de { total }</Text>
			</View>
		);
	}
}

export default inject( "store" )( observer( Card ) );