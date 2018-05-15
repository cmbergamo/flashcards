import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';

const Deck = ( props ) => {
	const { store } = props;
	const { deck } = props.navigation.state.params;

	return (
		<View style={ styles.container } >
			<Text>Título: { deck.title }</Text>
			<Text>Total de cartões neste baralho: { deck.cards.length }</Text>
			<View style={ styles.opcions } >
				<TouchableOpacity style={ styles.buttons }
					disabled={ deck.cards.length <= 0 }
					onPress={ () => props.navigation.navigate( 'Card', { cards: deck.cards, pos: 0 } ) }
				>
					<Text style={ styles.buttonsLabel } >Iniciar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.buttons } onPress={ () => edit( props.store, deck, props.navigation ) } >
					<MaterialIcons style={ styles.buttonsLabel } name="edit" size={20} />
					<Text  style={ styles.buttonsLabel } >Editar Baralho</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.buttons } onPress={ () => createCard( props.store, deck, props.navigation ) } >
					<MaterialIcons style={ styles.buttonsLabel } name="playlist-add" size={20} />
					<Text style={ styles.buttonsLabel } >Ad. Cartão</Text>
				</TouchableOpacity>
				
			</View>
		</View>
	);
}

const edit = ( _store, _deck, _navigation ) => {
	_store.editDeck( _deck );
	_navigation.navigate( 'Create' );
}

const createCard = ( _store, _deck, _navigation ) => {
	_store.editDeck( _deck );
	_navigation.navigate( 'CCard' );
}



export default inject( 'store' )( observer( Deck ) );