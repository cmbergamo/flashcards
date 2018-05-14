import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react';

const Deck = ( props ) => {
	const { store } = props;
	const { deck } = props.navigation.state.params;

	return (
		<View>
			<Text>Título: { deck.title }</Text>
			<Text>Total de cartões neste baralho: { deck.cards.length }</Text>
			<View style={ styles.opcoes } >
				<Button title='Iniciar' 
					disabled={ deck.cards.length > 0 }
					onPress={ () => props.navigation.navigate( 'Card', { cards: deck.cards, pos: 0 } ) }
				/>

				<TouchableOpacity onPress={ () => edit( props.store, deck, props.navigation ) } >
					<Text>Editar Baralho</Text>
					<MaterialIcons name="edit" size={20} color="green" />
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => createCard( props.store, deck, props.navigation ) } >
					<MaterialIcons name="playlist_add" size={20} color="green" />
					<Text>Adicionar Cartão</Text>
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

const styles = StyleSheet.create( {
	opcoes: {
		flexDirection: 'row'
	}
} );

export default inject( 'store' )( observer( Deck ) );