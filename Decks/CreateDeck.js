import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Animated, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import SideMenu from '../Components/SideMenu';
import { MaterialIcons } from '@expo/vector-icons';
import { load, saveDecks } from '../api/Storage';
import AppButton from '../Components/AppButton';

class CreateDeck extends Component {
	
	saveDeck( ) {
		this.props.store.createDeck( );

		saveDecks( this.props.store.listDecks );

		this.props.navigation.navigate('Home');
		
	}

	render( ) {
		const { store } = this.props;

		return (
			<View style={ styles.body } >
				<SideMenu navigation={ this.props.navigation } />
				<View style={ styles.field } >
					<Text style={ styles.label } >Título:</Text>
					<TextInput style={ styles.input }
						underlineColorAndroid='skyblue'
						onChangeText={ ( title ) => store.editTitle( title ) } value={ store.editedTitle }/>
				</View>
				<View style={ styles.field } >
					<Text style={ styles.label } >Total Cards: { this.props.store.totalCards }</Text>
					<AppButton title='Adic. Cartão' press={ () => {
							this.props.navigation.navigate( 'CCard' ) } }
						/>
				</View>
				<View>
					{ this.props.store.onCreationCards.map( ( card, ordem ) => {
						return ( <View key={ ordem } style={ styles.listCards } >
							<Text>{ card.question }</Text>
							<AppButton style={ { flex: 0 } } press={ () => this.props.navigation.navigate( "CCard",  { card } ) } icon="edit" />
							<AppButton style={ { flex: 0 } } press={ () => this.props.store.removeCard( card.id ) } icon="delete" />
						</View> );
					} )}
				</View>
				<View style={ styles.fieldCentered } >
					<AppButton title='Salvar' press={ () => this.saveDeck() } />
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
	listCards: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 5,
		width: 120
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

export default inject( "store" )( observer( CreateDeck ) );