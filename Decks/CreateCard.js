import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class CreateCard extends Component {
	
	state = {
		pergunta: '',
		resposta: ''
	}

	salveCard( ) {
		this.props.store.createCard( this.state );
		console.log("Voltou");
		// this.props.dispatch( createCard( { card: this.state } ) );
		this.props.navigation.pop();
	}

	render( ) {
		console.log( this.props.store );
		const { navigation } = this.props
		return (
			<View style={ styles.body } >
				<View style={ styles.field } >
					<Text style={ styles.label } >Pergunta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( pergunta ) => this.setState( { pergunta } ) } />
				</View>
				<View style={ styles.field } >
					<Text style={ styles.label } >Resposta:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( resposta ) => this.setState( { resposta } ) } />
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

export default CreateCard;