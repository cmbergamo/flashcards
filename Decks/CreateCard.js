import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';
import AppButton from '../Components/AppButton';

class CreateCard extends Component {
	
	state = {
		question: '',
		answer: '',
		id: 0,
	}

	salveCard( ) {
		const { save, question, answer, id } = this.state;

		if ( this.state.question !== undefined && this.state.question !== null && this.state.question !== ''
			&& this.state.answer !== undefined && this.state.answer !== null && this.state.answer !== '') {
				this.props.store.createCard( this.state );

				this.props.navigation.pop();
		} else {
			alert('Não é permitido criar um cartão com uma pergunta/resposta vazia.');
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		let state = null;

		if ( nextProps.navigation && nextProps.navigation.state && nextProps.navigation.state.params && nextProps.navigation.state.params.card ) {
			const { card } = nextProps.navigation.state.params;

			state = { id: card.id, question: card.question, answer: card.answer };
		}
		
		return state;

	}

	render( ) {
		const { navigation } = this.props;

		return (
			<View style={ styles.container } >
				<View style={ styles.options } >
					<Text style={ styles.label } >Pergunta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( question ) => this.setState( { question } ) } value={ this.state.question }/>
				</View>
				<View style={ styles.options } >
					<Text style={ styles.label } >Resposta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( answer ) => this.setState( { answer } ) } value={ this.state.answer }/>
				</View>
				<View style={ styles.options } >
					<AppButton title='Salvar' press={ () => this.salveCard( )  } />
				</View>
			</View>
		) ;
	}

}

/* const styles = StyleSheet.create( {
	body: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 5,
		backgroundColor: 'white'
	},
	field: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexWrap: 'wrap'
		
	},
	fieldCentered: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	label: {
		flex: 1,
		color: 'black',
		fontSize: 15
	},
	input: {
		flex: 4,
		backgroundColor: 'white',
		margin: 0,
		padding: 0,
		height: 33
	}
} ) */

export default inject( "store" )( observer( CreateCard ) );