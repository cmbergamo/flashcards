import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

class CreateCard extends Component {
	
	state = {
		pergunta: '',
		resposta: '',
		card: {}
	}

	salveCard( ) {
		const { card, pergunta, resposta } = this.state;
		card.pergunta = pergunta;
		card.resposta = resposta;

		this.props.store.createCard( card );
		// this.props.dispatch( createCard( { card: this.state } ) );
		this.props.navigation.pop();
	}

	static getDerivedStateFromProps(nextProps, prevState) {

		if ( nextProps.navigation && nextProps.navigation.state && nextProps.navigation.state.params && nextProps.navigation.state.params.card ) {
			console.log( "Entrou" );
			const { card } = nextProps.navigation.state.params;

			const state = { card, pergunta: card.pergunta, resposta: card.resposta };

			console.log( state );

			return state;
		}
		
		return null;

		// return { pergunta: '', resposta: '', card: {} };

	}

	render( ) {
		const { navigation } = this.props;

		return (
			<View style={ styles.body } >
				<View style={ styles.field } >
					<Text style={ styles.label } >Pergunta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( pergunta ) => this.setState( { pergunta } ) } value={ this.state.pergunta }/>
				</View>
				<View style={ styles.field } >
					<Text style={ styles.label } >Resposta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( resposta ) => this.setState( { resposta } ) } value={ this.state.resposta }/>
				</View>
				<View style={ styles.fieldCentered } >
					<Button title='Salvar' onPress={ () => this.salveCard( )  } />
				</View>
			</View>
		) ;
	}

}

const styles = StyleSheet.create( {
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
} )

export default inject( "store" )( observer( CreateCard ) );