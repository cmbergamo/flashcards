import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';
import AppButton from '../Components/AppButton';

class Card extends Component {

	state = {
		answer: false,
		disabled: false,
		pos: 0,
		cards: []
	}

	answer( _type ) {
		if ( _type > 0 )
			this.props.store.correctAnswer();
		else
			this.props.store.wrongAnswer();

		this.setState( { disabled: true } );
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const { pos } = nextProps.navigation.state.params;

		const deck = nextProps.store.editedDeck;
		const { cards } = deck;
		
		if ( prevState.pos !== pos || cards !== prevState.cards )
			return { pos, cards };

		return null;
	}

	render() {
		const card = this.state.cards[ this.state.pos ];

		let components = [];

		const total = this.state.cards.length;
		const atual = this.state.pos + 1;
		
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
								(
									<View style={ styles.options } >
										<AppButton title='Próxima' press={ () => this.setState( { pos: atual, answer: false, disabled: false } ) } />
									</View>
								) :
								(
									<View style={ styles.options } >
										<AppButton title='Estatisticas' press={ () => this.props.navigation.navigate( 'Stats' ) } />
									</View>
								)
						)
					) :
					(
						<View style={ { flexDirection: 'row' } } >
							<AppButton title='Mostrar Resposta' press={ () => this.setState( { answer: true } ) } />
						</View>
					)
				}
				<Text>Cartão { atual } de { total }</Text>
			</View>
		);
	}
}

export default inject( "store" )( observer( Card ) );