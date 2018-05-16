import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';
import AppButton from '../Components/AppButton';

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
		
		return (
			<View style={ styles.container } >
				<Text>{ card.question }</Text>
				{
					this.state.answer && ( <Text key={ 1 } >{ card.answer }</Text> )
				}
				{
					this.state.answer ?
					(
						!this.state.disabled ?
						(
							<View style={ styles.options } >
								<AppButton
									press={ () => this.answer( 1 ) }
									title='Correto' />
								<AppButton title='Errado' press={ () =>  this.answer( -1 ) } />
							</View>
						) : (
							total > atual ?
								( <AppButton title='Próxima' press={ () => this.props.navigation.navigate( 'Card', { cards, pos: pos+1 } ) } /> ) :
								( <AppButton title='Estatisticas' press={ () => this.props.navigation.navigate( 'Stats' ) } /> )
						)
					) :
					( <AppButton title='Mostrar Resposta' press={ () => this.setState( { answer: true } ) } /> )
				}
				<Text>Cartão { atual } de { total }</Text>
			</View>
		);
	}
}

export default inject( "store" )( observer( Card ) );