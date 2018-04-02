import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class CreateCard extends Component {
	
	state = {
		cards: []
	}

	salveCard = ( _ev ) => {
		console.log( _ev );

		navigation.goBack();
	}

	render( ) {
		const { navigation } = this.props
		return (
			<View style={ styles.body } >
				<View style={ styles.field } >
					<Text style={ styles.label } >Pergunta:</Text>
					<TextInput style={ styles.input } underlineColorAndroid='skyblue'/>
				</View>
				<View style={ styles.field } >
					<Text style={ styles.label } >Resposta:</Text>
					<TextInput style={ styles.input } underlineColorAndroid='skyblue'/>
				</View>
				<View style={ styles.fieldCentered } >
					<Button title='Salvar' onPress={ ( event ) => this.salveCard( event )  } />
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