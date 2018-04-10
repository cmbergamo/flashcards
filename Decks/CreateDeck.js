import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Animated } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class CreateDeck extends Component {
	
	state = {
		titulo: '',
		cards: []
	}

	addCard( ) {
		const { height } = this.state;
		
		/* this.setState( () => {
			const { cards } = this.state;
			let array = cards.slice( 0 );
			array = array.concat( [ cards.length ] )
			alert( array );

			return { cards: array };
		}) */
	}

/* 	static getDerivedStateFromProps( nextProps, prevState ) {
			return null;
	} */

	render( ) {
		console.log( this.props.store.totalCards() );
		
		return (
			<View style={ styles.body } >
				<Text>Teste</Text>
				<View style={ styles.field } >
					<Text style={ styles.label } >Título:</Text>
					<TextInput style={ styles.input } underlineColorAndroid='skyblue'/>
				</View>
				<View style={ styles.field } >
					<Text style={ styles.label } >Total Cards: { this.props.store.totalCards() } </Text>
					<Button title='Adic. Cartão' onPress={ () => this.props.navigation.navigate( 'Card' ) } />
				</View>
				<View style={ styles.fieldCentered } >
					<Button title='Salvar' onPress={ () => console.log('teste') } />
				</View>

				{/* <Animated.View style={ { height, bottom: 0, right: 0, left: 0, position: 'absolute' } }>
					<CreateCard />
				</Animated.View> */}
			</View>
		) ;
	}

}

// const CCard =  Animated.createAnimatedComponent( CreateCard );

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

export default CreateDeck;